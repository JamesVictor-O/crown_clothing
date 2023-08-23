import HomePage from "./page/homepage.component/HomePage"
import SignInandOut from "./page/Sign-in-out/signIn_out";
import Root from "./page/Root/root";
import ShopPage from "./page/Shop/shop";
import Header from "./component/Header/header";
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

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={ <Root/>}>
      <Route index element={<HomePage/>} />
      <Route path="/shop" element={<ShopPage />} />
      <Route path="/signInandOut" element={<SignInandOut/>}/>
    </Route>
  )
)

function App() {
  return (
    <div>
     <RouterProvider router={router}/>
    </div>
  )
}
 
export default App
