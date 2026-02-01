// step4
import { configureStore } from "@reduxjs/toolkit";

import cakeReducer from '../components/cakeSlice';

const store = configureStore({
    reducer:{
        cake: cakeReducer
    }
})

export default store;