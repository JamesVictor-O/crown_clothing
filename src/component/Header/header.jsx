import { NavLink, Link } from "react-router-dom"
import { connect } from "react-redux"
import { ReactComponent as Logo } from "../../assets/crown.svg"
import { auth } from "../../firebase/firebase.utils"


import CartIcon from "../card-icon/card-icon"
import CartDropdown from "../cart-dropdown/card-dropdown"

import "./header.scss"
const Header = ({ currentUser, hidden }) => {
    console.log(hidden)
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

const mapStateToProps = ({user:{currentUser}, cart:{hidden}}) => ({
    currentUser,
    hidden
 })
export default connect(mapStateToProps)(Header)