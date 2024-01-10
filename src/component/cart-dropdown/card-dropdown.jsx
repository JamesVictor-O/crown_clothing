import "./card-dropdown.scss"

import CustomButton from "../custom-button/custom-button"
import CartItem from "../cart-items/cart-item";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


const CartDropdown = () => {
    const { cartItems } = useSelector((state) => state.cart)
    const navigate=useNavigate()
     
    return (
                
        <div className="cart-dropdown">
            <div className="cart-items">
                {
                    cartItems.map(cartItem => (
                        <CartItem key={cartItem.id} item={cartItem} />
                    ))
                }
            </div>
            <CustomButton onClick={() => {
                navigate()
            }}>
                GO TO CHECKOUT
            </CustomButton>
        </div>
            )
}
    
;

export default CartDropdown;