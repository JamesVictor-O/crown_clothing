import HomePage from "./page/homepage.component/HomePage"
import HatsPage from "./page/Hatspage/hatsPage";
import Other from "./page/Hatspage/other";
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
      <Route path="/" element={<HomePage />} />
      <Route path="/hats" element={<HatsPage />}>
         <Route path="hataa" element={<Other/>}></Route>
      </Route>
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
