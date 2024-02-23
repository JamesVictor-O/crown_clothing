import React from "react";
import ReactDOM from "react";
import Menuitem from "../MenuItem/menuItem"; 
import { useSelector } from "react-redux";
import { selectProducts } from "../../redux/directory/directorySlice";
import "./directory.scss";


const Directory = () => {
    const sections = useSelector(selectProducts);
    return (
        <div className="directory-menu">
            {sections.map(({id, ...others}) => (
                <Menuitem key={id} {...others} />
            ))}
        </div>
    )
}

 
export default Directory