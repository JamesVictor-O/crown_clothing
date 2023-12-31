import { ReactComponent as ShoppingIcon } from "../../assets/shopping.svg";
import "./card-icon.scss"

import { connect } from "react-redux"

import { toggleCartHidden } from "../../redux/cart/cart.action"

const CartIcon = ({toggleCartHidden}) => (
    <div className="cart-icon" onClick={toggleCartHidden}>
        <ShoppingIcon className="shopping-icon" />
        <span className="item-count">3</span>
    </div>
)
const mapDispatchToProps = dispatch => ({
    toggleCartHidden:()=> dispatch(toggleCartHidden())
})
export default connect(null, mapDispatchToProps)(CartIcon);