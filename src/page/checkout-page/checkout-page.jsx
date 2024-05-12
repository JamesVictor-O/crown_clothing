import "./checkout-page.scss";
import { useSelector } from "react-redux";
import CheckoutItem from "../../component/checkout-items/checkout-item";
import PayButton from "../../component/payStack/payStack";
import StripePaymentButton from "../../component/stripe-button/stripeBotton"



const CheckOutPage = () => {
  const { cartItems, hidden } = useSelector((state) => state.cart);
  const { currentUser } = useSelector((state) => state.user);

  const email = currentUser.email;

  console.log(email);
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );

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

      {cartItems.map((cartItem) => (
        <CheckoutItem cartItem={cartItem} key={cartItem.id} />
      ))}

      {cartItems.length !== 0 ? (
        <div className="itemsTotalPrice">TOTAL : {totalPrice}$</div>
      ) : (
        <span className="empty-massage">Your Cart is Empty !!!</span>
      )}

      <div className="payment-button">
              {/* <PayButton amount={totalPrice* 100} email={email} /> */}
              <StripePaymentButton amount={totalPrice* 100} email={email}/>
        
      </div>
    </div>
  );
};
export default CheckOutPage;
