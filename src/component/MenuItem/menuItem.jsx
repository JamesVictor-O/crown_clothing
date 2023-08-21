import React from "react";
import { ReactDOM } from "react";
import "./menuItem.scss"
import { createBrowserRouter, useNavigate } from "react-router-dom";


// const Menuitem = ({ title, ImageUI, size, link }) => (
    
//     <div className={`${size} menu-item`} onClick={() => {
//         let history = createBrowserHistory();
//         console.log( )
//     }} >
//         <div
//             className="background-image"
//             style={{
//                 backgroundImage: `url(${ImageUI})`
//             }}
//         />
//         <div className="content">
//             <h1 className="title">{title}</h1>
//             <span className="subtitle">SHOP NOW</span>
//         </div>
//     </div>
// )

function Menuitem({ title, ImageUI, size, link }) {
    let navigate=useNavigate()
    return (
        <div className={`${size} menu-item`} onClick={() => {
        
            navigate(`/hats`)
        }} >
            <div
                className="background-image"
                style={{
                    backgroundImage: `url(${ImageUI})`
                }}
            />
            <div className="content">
                <h1 className="title">{title}</h1>
                <span className="subtitle">SHOP NOW</span>
            </div>
        </div>
    )
}
export default Menuitem;
