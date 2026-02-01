import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  numOfCakes: 20
}

// create slice is an object that takes key value pairs
// in reducers we dont have to explicitely return the new state
// and we can directly mutate the state redux toolkit handles state updation on your behave
// createSlice automatically creates action creators with the names of reducers
const cakeSlice = createSlice({
  name: 'cake',
  initialState,
  reducers: {
    ordered: (state, action) => {
    //   state.numOfCakes--
      state.numOfCakes = state.numOfCakes - action.payload
    },
  }
})

export default cakeSlice.reducer
export const { ordered } = cakeSlice.actions