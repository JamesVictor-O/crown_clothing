import { ReactComponent as ShoppingIcon } from "../../assets/shopping.svg";
import { toggleCartItem } from "../../redux/slices/cartSlice";
import { useSelector,useDispatch } from "react-redux";
import "./card-icon.scss"

const CartIcon = () => {
    const dispatch = useDispatch()
    const handleCartItemsToggling = () => {
        dispatch(toggleCartItem())
    }
    return (
    <div className="cart-icon" onClick={handleCartItemsToggling}>
        <ShoppingIcon className="shopping-icon" />
        <span className="item-count">3</span>
    </div>
        
    )
}
    

export default CartIcon;