import React from "react";
import ReactDOM from "react";
import Directory from "../../component/directory/directory";

import "./container.scss"

const HomePage = (props) => {
    console.log(props)
    return (
        <div className="homepage">
           <Directory/>
       </div>
    )
}

export default HomePage;