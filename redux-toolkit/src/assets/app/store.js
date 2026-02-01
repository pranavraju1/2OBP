import { configureStore } from '@reduxjs/toolkit'
import cakeReducer from '../components/cake/cakeSlice'
import icecreamReducer from '../components/icecream/icecreamSlice'
import userReducer from '../components/user/userSlice'
import logger from 'redux-logger'

// middleware is defined after reducer inside configureStore
// the middleware prop takes a callback function and that function takes getDefaultMiddleware as arg
// we then getDefaultMiddleware().concat(logger). this is done bc configureStore by-default 
// applies some middlewares in store setup so we need to concat the list with additional middlewares
const store = configureStore({
  reducer: {
    cake: cakeReducer,
    icecream: icecreamReducer,
    user: userReducer
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})

export default store