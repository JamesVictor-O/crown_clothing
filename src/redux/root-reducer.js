import { combineReducers } from "redux";
import userReducer from "./user/user.reducer";
import cartSlice from "./slices/cartSlice";

export default combineReducers({
    user: userReducer,
    cart: cartSlice
})