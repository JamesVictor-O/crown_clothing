import { createSlice } from "@reduxjs/toolkit";
import { addItemToCart } from "./cart.utils";
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
        }
    }
})

export const { toggleCartItem, addItemsToCart } = cartSlice.actions;
export default cartSlice.reducer;