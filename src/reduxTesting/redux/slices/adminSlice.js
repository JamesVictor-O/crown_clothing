import { createSlice } from "@reduxjs/toolkit";
const adminState = {
    email: "ochulajames",
    uid: "171030",
    name:"michel"
}
export const adminSlice = createSlice({
    name: "adminSlice",
    initialState: adminState,
    reducers:{
        AdminLogin: (state, action) => {
            state.email=action.payload
        }
    }
})
export default adminSlice.reducer;