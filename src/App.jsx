import HomePage from "./page/homepage.component/HomePage"
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

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<HomePage/>} />
      <Route path="/shop" element={<ShopPage/>} />
    </Route>
  )
)

function App() {
  return (
    <div>
      <h2>home</h2>
     <RouterProvider router={router}/>
    </div>
  )
}
 
export default App
