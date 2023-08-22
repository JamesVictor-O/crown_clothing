import React from "react";
import ReactDOM from "react";
import Menuitem from "../MenuItem/menuItem";
import "./directory.scss";

class Directory extends React.Component{
    constructor() {
        super();
        this.state = {
            sections: [
                {
                    title: "hats",
                    ImageUI: "/src/assets/hat.jpg",
                    id:1,
                    link:"/hats"
                },
                {
                    title: "jackets",
                    ImageUI: "/src/assets/jackets.png",
                    id: 2,
                    link:""
                },
                {
                    title: "sneakers",
                    ImageUI: "/src/assets/sneakers.png",
                    id: 3,
                    link:""
                },
                {
                    title: "womens",
                    ImageUI: "/src/assets/women.png",
                    size:"large",
                    id: 4,
                    link:""
                },
                {
                    title: "mens",
                    ImageUI: "/src/assets/men1.png",
                    size:"large",  
                    id: 5,
                    link:""
                }
            ]
            
        }
     }

    render() {
        return (
            <div className="directory-menu">
                {this.state.sections.map(({id, ...others}) => (
                    <Menuitem key={id} {...others} />
                ))}
            </div>
        )
    }
}
 
export default Directory