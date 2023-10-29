import { createSlice } from "@reduxjs/toolkit";
const userState = {
    email: "victorjames406@gmail.com",
    userId: "",
    items:[]
}
export const userSlice = createSlice({
    name: "user",
    initialState: userState,
    reducers: {
        changeUser: (state, action) => {
            return {
                ...state,
                email: action.payload
            }
        },
        addItems: (state, action) => (
            {
                ...state,
                items:[...state.items, action.payload]
            }
        ),
        logOut: (state) => {
            
            return {
                ...state,
                email: userState.email,
            }
        }
    }
})
export const { changeUser,addItems,logOut }=userSlice.actions;
export default userSlice.reducer;