import { useState, useEffect } from "react"
import { onSnapshot } from "firebase/firestore";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";


//pages to be routed
import HomePage from "./page/homepage.component/HomePage"
import SignInandOut from "./page/Sign-in-out/signIn_out";
import Root from "./page/Root/root";
import ShopPage from "./page/Shop/shop";
import CheckOutPage from "./page/checkout-page/checkout-page";
  
  
import { setCurrentUser } from "./redux/slices/userSlice"

// import LoginPage  from "./reduxTesting/LoginPage";
// import MainPage  from "./reduxTesting/mainPage";

import { useSelector, useDispatch } from "react-redux";


import "../src/App.css"
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Routes,
  Route,
  Link,
  NavLink,
  Navigate
} from "react-router-dom";

// import HomePage from "./page/homepage.component/homePage";

 


function App() {

  const { currentUser } = useSelector((state) => state.user)
  
  const dispatch = useDispatch()
  const handleCurrentUserSetting= user =>{
    dispatch(setCurrentUser(user))
}
    useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged(async userAuth => {
        if (userAuth) {
          const userRef = await createUserProfileDocument(userAuth)
          onSnapshot(userRef, (snapshot) => {
            handleCurrentUserSetting( {
                id: snapshot.id,
                ...snapshot.data()
              })
          })
        } else {
          handleCurrentUserSetting(userAuth)
         }
        })

        return ()=>{
          unsubscribe()
        }
    },[])
  const router = createBrowserRouter( 
    
    createRoutesFromElements(
      
      <Route path="/" element={<Root/>}>
        
          {/* <Route index element={<LoginPage />} />
          <Route path="mainpage" element={<MainPage/>}/> */}
        <Route index element={<HomePage/>} />
        <Route path="/shop" element={<ShopPage/>} />
        <Route path="/checkoutPage" element={<CheckOutPage/>}/>
        <Route path="/signInandOut" element={currentUser ? <Navigate to="/" replace/> : <SignInandOut/> } />
        </Route>
    )
  )
  return (
    <div>
     <RouterProvider router={router}/>
    </div>
  )
} 
// const mapStateToProps = state => ({
//   currentUser: state.user.currentUser
// })
// const mapDispatchToProps = dispatch => ({
//     setCurrentUser:user => dispatch(setCurrentUser(user))
// })

 
 export default App
