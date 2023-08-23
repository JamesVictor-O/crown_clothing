import { NavLink,Link } from "react-router-dom"
// import {Logo} from "../../assets/crown.svg"
 import "./header.scss"
const Header = () => (
     <div className="header">
        <NavLink className="logo-container" to="/">
            
            LoGo
        </NavLink>
        <div className="options">
            <NavLink className="option" to="/shop">
                SHOP
            </NavLink>
            <NavLink className="option" to="/contact">
                CONTACT
            </NavLink>
            <NavLink className="option" to="/signInandOut">
                Sign In
            </NavLink>
        </div>
     </div>
)

export default Header