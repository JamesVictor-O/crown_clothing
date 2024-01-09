import { ReactComponent as ShoppingIcon } from "../../assets/shopping.svg";
import { toggleCartItem } from "../../redux/slices/cartSlice";
import { useSelector,useDispatch } from "react-redux";
import "./card-icon.scss"

const CartIcon = () => {

    const {cartItems}= useSelector((state)=> state.cart)

    const totalCount = cartItems.reduce((accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity, 0)
    
    const dispatch = useDispatch()
    const handleCartItemsToggling = () => {
        dispatch(toggleCartItem())
    }
    return (
    <div className="cart-icon" onClick={handleCartItemsToggling}>
        <ShoppingIcon className="shopping-icon" />
            <span className="item-count">{totalCount}</span>
    </div>
        
    )
}
    

export default CartIcon;