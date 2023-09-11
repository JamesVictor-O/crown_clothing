import "./collectionItem.scss"
import CustomButton from "../custom-button/custom-button";
import { connect } from "react-redux";

import { addItem } from "../../redux/cart/cart.action";

function CollectionItem({ item, addItem,cartItem }) {
    const { price, name, imageUrl } = item;
     console.log(cartItem)
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
            <CustomButton onClick={()=> addItem(item)} inverted>ADD TO CART</CustomButton>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    addItem:item => dispatch(addItem(item))
})
const mapStateToProps = state => ({
    cartItem:state.cart.cartItem
})
export default connect(mapStateToProps,mapDispatchToProps)(CollectionItem);