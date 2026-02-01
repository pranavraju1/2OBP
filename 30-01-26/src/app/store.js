// step4
import { configureStore } from "@reduxjs/toolkit";

import cakeReducer from '../components/cake/cakeSlice';
import logger from "redux-logger";
import userReducer from '../components/user/userSlice'

// middleware is defined after reducer inside configureStore
// the middleware prop takes a callback function and that function takes getDefaultMiddleware as arg
// we then getDefaultMiddleware().concat(logger). This is done bc configureStore by-default applies some
// middleware in store setup so we need to concat the list with additional middleware

const store = configureStore({
    reducer:{
        cake: cakeReducer,
        user: userReducer
    },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
});


export default store;