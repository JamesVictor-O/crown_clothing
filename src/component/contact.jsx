import React from "react";
import { Link, useParams,Outlet} from "react-router-dom";
import { ReactDOM } from "react";

function Contact() {
   
    return (
        <div>
            <Link to="/">Home</Link>
            <h1>Contact page </h1>

            <main>
                <Outlet/>
            </main>
        </div>
    )
}

function ContactID() {
    return (
        <div>
            <h2>Sub contact page !!</h2>
        </div>
    )
}
export {Contact,ContactID}