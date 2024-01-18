import "./card-dropdown.scss"

import CustomButton from "../custom-button/custom-button"
import CartItem from "../cart-items/cart-item";
import { toggleCartItem } from "../../redux/slices/cartSlice";
import { useSelector,useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";


const CartDropdown = () => {
    const { cartItems } = useSelector((state) => state.cart)
    const dispatch = useDispatch()

    const handleCartItemsToggling = () => {
        dispatch(toggleCartItem());
        navigate("/checkoutPage");

    }
    const navigate=useNavigate()
     
    return (
                
        <div className="cart-dropdown">
            <div className="cart-items">
               {
                cartItems.length ? (
                        cartItems.map(cartItem => (
                            <CartItem key={cartItem.id} item={cartItem} />
                        ))
                    
                    ) :
                (
                    <span className="empty-massage">Your Cart is Empty !!!</span>
                )
               }
            </div>
            <CustomButton onClick={handleCartItemsToggling}>
                GO TO CHECKOUT
            </CustomButton>
        </div>
            )
}
    
;

export default CartDropdown;