import "./checkout-page.scss"
import { useSelector } from "react-redux";
import CheckoutItem from "../../component/checkout-items/checkout-item";

const CheckOutPage = () => {
    const { cartItems, hidden } = useSelector((state) => state.cart) 
    const totalPrice = cartItems.reduce((acc, item) => acc + item.quantity * item.price, 0)
    
    return (
        <div className="checkoutPage">
            <div className="checkout-header">
                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span>Discription</span>
                </div>
                <div className="header-block">
                    <span>Quantity</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>
            </div>
            
                {cartItems.map(cartItem => (
                    <CheckoutItem cartItem={cartItem} key={cartItem.id}/>
                  ) )}

        {cartItems.length !== 0 ? (
                <div className="itemsTotalPrice">
                TOTAL : {totalPrice }$
               </div>
            ) : (
                <span className="empty-massage">Your Cart is Empty !!!</span>
            )}
        </div>
    )
}
export default CheckOutPage;