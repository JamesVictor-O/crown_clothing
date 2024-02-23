import { createSlice } from "@reduxjs/toolkit";
import SHOP_DATA from "../../page/Shop/shop.data";

const INITIAL_STATE = {
    SHOP_DATA
}

export const shopSlice = createSlice({
    name: "shopSlice",
    initialState: INITIAL_STATE,
    reducers: {
    
    }
})

export const selectedDatas=state=>state.shop.SHOP_DATA

export default shopSlice.reducer