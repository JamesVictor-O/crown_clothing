import "./checkout-item.scss";
import { useDispatch } from "react-redux";
import {
  removeItemsfromCart,
  addItemsToCart,
  decreaseItemsQuantity,
} from "../../redux/slices/cartSlice";

const CheckoutItem = ({ cartItem }) => {
  const dispatch = useDispatch();

  const HandleRemoveItem = () => {
    dispatch(removeItemsfromCart(cartItem.id));
  };
  const handleIncreaseQuantity = () => {
    dispatch(addItemsToCart(cartItem));
  };
  const handleDecreaseQuantity = () => {
    dispatch(decreaseItemsQuantity(cartItem));
  };
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img alt="item" src={cartItem.imageUrl} />
      </div>
      <span className="item-name">{cartItem.name}</span>
      <span className="item-quantity">
        <div className="arrow" onClick={handleDecreaseQuantity}>
          &#10094;
        </div>
        <span className="value">{cartItem.quantity}</span>
        <div className="arrow" onClick={handleIncreaseQuantity}>
          &#10095;
        </div>
      </span>
      <span className="item-price">{cartItem.price * cartItem.quantity}$</span>
      <div className="remove-button">
        <span onClick={HandleRemoveItem}>&#10005;</span>
      </div>
    </div>
  );
};

export default CheckoutItem;
