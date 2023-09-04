import { useState, useEffect } from "react"
import { onSnapshot } from "firebase/firestore";
import { auth,createUserProfileDocument} from "./firebase/firebase.utils";
import HomePage from "./page/homepage.component/HomePage"
import SignInandOut from "./page/Sign-in-out/signIn_out";
import Root from "./page/Root/root";
import ShopPage from "./page/Shop/shop";
import "../src/App.css"
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Routes,
  Route,
  Link,
  NavLink
} from "react-router-dom";
// import HomePage from "./page/homepage.component/homePage";

 


function App() {
      let [currentUser, setCurrentUser] = useState(null)
    useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged(async userAuth => {
        if (userAuth) {
          const userRef = await createUserProfileDocument(userAuth)
          onSnapshot(userRef, (snapshot) => {
            setCurrentUser( {
                id: snapshot.id,
                ...snapshot.data()
              })
          })
        } else {
          setCurrentUser(userAuth)
         }
        })

        return ()=>{
          unsubscribe()
        }
    },[])
  const router = createBrowserRouter( 
    
    createRoutesFromElements(
      
      <Route path="/" element={<Root currentUser={ currentUser} />}>
          <Route index element={<HomePage/>} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/signInandOut" element={<SignInandOut/>}/>
        </Route>
    )
  )
  return (
    <div>
     <RouterProvider router={router}/>
    </div>
  )
}
 
export default App
