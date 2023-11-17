import { createSlice } from "@reduxjs/toolkit";
const INITIAL_STATE = {
    currentUser:null
}

export const userSlice = createSlice({
    name: "userSlice",
    initialState: INITIAL_STATE,
    reducers: {
        setCurrentUser: (state,action)=>{
            return {
                ...state,
                currentUser:action.payload
            }
        }
    }
})
export const { setCurrentUser } = userSlice.actions;
export default userSlice.reducer;