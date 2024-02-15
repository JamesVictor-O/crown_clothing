import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import cartSlice from "./cartSlice";
import userSlice from "./userSlice";

import persistedReducer from "../root-reducer";
import { persistStore, FLUSH,REHYDRATE,PAUSE } from "redux-persist";




export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoreActions:[FLUSH,REHYDRATE,PAUSE]
            }
        })
})

export const persistor = persistStore(store)
