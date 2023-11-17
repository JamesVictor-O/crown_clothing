import { NavLink, Link } from "react-router-dom"
import { ReactComponent as Logo } from "../../assets/crown.svg"
import { auth } from "../../firebase/firebase.utils"


import CartIcon from "../card-icon/card-icon"
import CartDropdown from "../cart-dropdown/card-dropdown"

import { useSelector } from "react-redux"

import "./header.scss"
const Header = () => {
    const { currentUser } = useSelector((state) => state.user)
    const {hidden}=useSelector((state)=> state.cart)
    return (
     <div className="header">
        <NavLink className="logo-container" to="/">
            
            <Logo/>
        </NavLink>
        <div className="options">
            <NavLink className="option" to="/shop">
                SHOP
            </NavLink>
                
            <NavLink className="option" to="/contact">
                CONTACT
            </NavLink>
            {
                    currentUser ? 
                        
                <div className="option" onClick={()=> auth.signOut()} >SIGN OUT</div> : <NavLink to="/signInandOut" >SIGN IN</NavLink>
            }
            
            <CartIcon />
        </div>
            {
                hidden ? null : <CartDropdown/>
            }
     </div>
    )
}

export default Header