import React from "react";
import { ReactDOM } from "react";
import "./menuItem.scss"
import { createBrowserRouter, useNavigate } from "react-router-dom";



function Menuitem({ title, ImageUI, size, link }) {
    let navigate=useNavigate()
    return (
        <div className={`${size} menu-item`} onClick={() => {
        
            navigate(`/shop`)
        }} >
            <div
                className="background-image"
                style={{
                    backgroundImage: `url(${ImageUI})`
                }}
            />
            <div className="content">
                <h1 className="title">{title.toUpperCase()}</h1>
                <span className="subtitle">SHOP NOW</span>
            </div>
        </div>
    )
}
export default Menuitem;
