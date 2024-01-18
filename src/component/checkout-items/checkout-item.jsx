import "./checkout-item.scss"
import { useDispatch } from "react-redux"
import { cartSlice, removeItemsfromCart } from "../../redux/slices/cartSlice"

const CheckoutItem = ({cartItem: {name,imageUrl, price, quantity,id} }) => {
    const dispatch = useDispatch()
    
    const HandleRemoveItem = () => {
          dispatch(removeItemsfromCart(id))
      }
    return (
        <div className="checkout-item">
            <div className="image-container">
                <img alt="item" src={imageUrl } />
            </div> 
            <span className="item-name">{ name}</span>
            <span className="item-quantity">{quantity }</span>
            <span className="item-price">{ price}$</span>
            <div className="remove-button">
                <span onClick={HandleRemoveItem}>&#10005;</span>
            </div>
        </div>
    )
}

export default CheckoutItem