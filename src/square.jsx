import React from "react";
import { ReactDOM } from "react";
import { useState } from "react";


function Square() {

    const [value, setValue]=useState(null)
    function handleClick(e) {
        setValue("X")
    }
    return <button onClick={handleClick} className="square">{ value }</button>
}
export default Square;