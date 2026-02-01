import { createSlice } from "@reduxjs/toolkit";
import { ordered } from "../cake/CakeSlice";

const initialState = {
    numOfIcecreams: 30
}

const icecreamSlice = createSlice({
    name: 'icecream',
    initialState,
    reducers:{
        buyIcecream: (state, action)=>{
            state.numOfIcecreams = state.numOfIcecreams - action.payload
        },
    },
    extraReducers: builder => {
        // this takes action as 1st arg and then a reducer as second arg
        builder.addCase(ordered, state => {
          state.numOfIcecreams--
        })
      }
})

export default icecreamSlice.reducer;
export const {buyIcecream} = icecreamSlice.actions

// Redux toolkit does not allow us to use different reducers form other slice
// If you want your slice to act on other action types besides the one it generates you will have to use extra reducers