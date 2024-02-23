import "./collectionItem.scss"
import CustomButton from "../custom-button/custom-button";
import { useSelector, useDispatch } from "react-redux";
import { addItemsToCart } from "../../redux/slices/cartSlice";

function CollectionItem({ item, addItem, cartItem }) {
    const { price, name, imageUrl } = item;
    const dispatch = useDispatch()
    const handleAddingItemsToCart = () => {
        dispatch(addItemsToCart(item))
    }
    return (
        <div className="collection-item">
            <div
                className="image"
                style={{
                    backgroundImage:`url(${imageUrl})`
                }}
            />
            <div className="collection-footer">
                <span className="name">{ name }</span>
                <span className="price">{ price}$</span>
            </div>
            <CustomButton onClick={handleAddingItemsToCart} inverted>ADD TO CART</CustomButton>
        </div>
    )
}

export default CollectionItem;
