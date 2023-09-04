import { NavLink, Link } from "react-router-dom"
// import {Logo} from "../../assets/crown.svg"
import { auth } from "../../firebase/firebase.utils"
import "./header.scss"
const Header = ({currentUser}) => {
    
    return (
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
            {
                    currentUser ? 
                        
                <div className="option" onClick={()=> auth.signOut()} >SIGN OUT</div> : <NavLink to="/signInandOut" >SIGN IN</NavLink>
            }
            
        </div>
     </div>
        
    )
}


export default Header