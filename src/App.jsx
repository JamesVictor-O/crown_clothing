import { useState, useEffect } from "react"
import { onSnapshot } from "firebase/firestore";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

import HomePage from "./page/homepage.component/HomePage"
import SignInandOut from "./page/Sign-in-out/signIn_out";
import Root from "./page/Root/root";
import ShopPage from "./page/Shop/shop";

import { connect } from "react-redux"
import { setCurrentUser } from "./redux/user/user.action";

// import LoginPage  from "./reduxTesting/LoginPage";
// import MainPage  from "./reduxTesting/mainPage";

import { store2 } from "./reduxTesting/store2";


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

 


function App(props) {
    useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged(async userAuth => {
        if (userAuth) {
          const userRef = await createUserProfileDocument(userAuth)
          onSnapshot(userRef, (snapshot) => {
            props.setCurrentUser( {
                id: snapshot.id,
                ...snapshot.data()
              })
          })
        } else {
          props.setCurrentUser(userAuth)
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
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/signInandOut" element={props.currentUser ? <Navigate to="/" replace/> : <SignInandOut/> } />
        </Route>
    )
  )
  return (
    <div>
     <RouterProvider router={router}/>
    </div>
  )
} 
const mapStateToProps = state => ({
  currentUser: state.user.currentUser
})
const mapDispatchToProps = dispatch => ({
    setCurrentUser:user => dispatch(setCurrentUser(user))
})
 
 
 export default connect(mapStateToProps,mapDispatchToProps)(App)
