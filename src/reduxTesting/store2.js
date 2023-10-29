import { configureStore } from "@reduxjs/toolkit";
import { loginReducer } from "./redux/login.reducer";
import userSlice from "./redux/slices/userSlice";
import adminSlice from "./redux/slices/adminSlice";

export const store2 = configureStore({
    reducer: {
        user: userSlice,
        admin: adminSlice,
    }
})