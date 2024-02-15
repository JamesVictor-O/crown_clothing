import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import { persistReducer} from "redux-persist";

// reducers
import userSlice from "./slices/userSlice";
import cartSlice from "./slices/cartSlice";


 const rootReducer = combineReducers({
    user: userSlice,
    cart: cartSlice
 });

 const persistConfig = {
    key: "root",
    storage,
    whitelist:["cart"]
}

const persistedReducer = persistReducer(persistConfig, rootReducer)
export default persistedReducer;