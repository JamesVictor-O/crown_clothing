import "./card-item.scss"

const CartItem = ({item: {imageUrl, price, name, quantity }}) => {
    return (
        <div className="cart-Item">
            <img src={imageUrl} alt="item-image" />
            <div className="item-details">
                <span className="name">{name}</span>
                <span className="price">${price * quantity }</span>
            </div>
        </div>
    )
}

export default CartItem