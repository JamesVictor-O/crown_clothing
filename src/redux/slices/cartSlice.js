import { createSlice } from "@reduxjs/toolkit";
import { addItemToCart,removeItemFromCart } from "./cart.utils";
const INITIAL_STATE = {
    hidden: true,
    cartItems:[]
}
export const cartSlice = createSlice({
    name: "cartSlice",
    initialState: INITIAL_STATE,
    reducers: {
        toggleCartItem: (state, action)=>{
            return {
                ...state,
                hidden: !state.hidden,
            }
        },
        addItemsToCart: (state, action)=>{
            return {
                ...state,
                cartItems:addItemToCart(state.cartItems, action.payload)
            }
        },
        removeItemsfromCart: (state, action) => {
            return {
                ...state,
                cartItems:removeItemFromCart(state.cartItems, action.payload)

            }
        }
    }
})

export const { toggleCartItem, addItemsToCart, removeItemsfromCart } = cartSlice.actions;
export default cartSlice.reducer;