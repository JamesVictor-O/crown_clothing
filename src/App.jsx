import HomePage from "./page/homepage.component/HomePage"
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
      <Route path="/shop" element={<ShopPage/>} />
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
