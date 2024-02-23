import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
    sections: [
        {
            title: "hats",
            ImageUI: "/src/assets/hat.jpg",
            id:1,
            link:"/hats"
        },
        {
            title: "jackets",
            ImageUI: "/src/assets/jackets.png",
            id: 2,
            link:""
        },
        {
            title: "sneakers",
            ImageUI: "/src/assets/sneakers.png",
            id: 3,
            link:""
        },
        {
            title: "womens",
            ImageUI: "/src/assets/women.png",
            size:"large",
            id: 4,
            link:""
        },
        {
            title: "mens",
            ImageUI: "/src/assets/men1.png",
            size:"large",  
            id: 5,
            link:""
        }
    ]
}

export const directorySlice = createSlice({
    name: "directorySlice",
    initialState: INITIAL_STATE,
    reducers: {
        resetState:(state)=>{
            return state;
        }
    }
    
})

export const selectProducts = state =>state.directory.sections

export const { resetState } = directorySlice.actions;
export default directorySlice.reducer