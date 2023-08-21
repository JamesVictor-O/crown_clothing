import React from "react";
import { ReactDOM } from "react";
import Home from "./component.router/homePage";
import RootLayout from "./layouts/RootLayout";
import About from "./component/about";
import { Contact, ContactID } from "./component/contact";
import ErrorPage from "./component/Error/error";
import "./index.css"
import {
    createBrowserRouter,
    BrowserRouter,
    Route,
    Routes,
    Link,
    NavLink,
    createRoutesFromElements,
    RouterProvider
} from "react-router-dom";

const router = createBrowserRouter(
//     [
//         {
//             path:"/",
//             element:< Home />
//         },
//         {
//             path:"/about",
//             element: <About />
//         },
//         {
//             path: "/contact",
//             element:< Contact />
//         }
// ]
    createRoutesFromElements(
        <Route path="/" element={<RootLayout/>}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} >
               <Route path="/contact/id" element={<ContactID />} />
            </Route>

            <Route path="*" element={<ErrorPage/> } />
        </Route>
    )
)

export default  function Router() {
    return (
        <div>
            <RouterProvider router={router}/>
       </div> 
    )
}
