import { configureStore, createSlice } from '@reduxjs/toolkit';

// Cart Slice
const cartSlice = createSlice({
    name: 'cart',
    initialState: {
      items: [],
      total: 0,
    },
    reducers: {
      addToCart: (state, action) => {
        state.items.push(action.payload);
        state.total += action.payload.price;
      },
    },
  });
  
  // Notifications Slice
  const notificationsSlice = createSlice({
    name: 'notifications',
    initialState: [],
    reducers: {
      addNotification: (state, action) => {
        state.push(action.payload);
      },
    },
  });
  
  // Filter Slice
  const filterSlice = createSlice({
    name: 'filters',
    initialState: {},
    reducers: {
      setFilter: (state, action) => {
        return action.payload;
      },
    },
  });
  
  export const store = configureStore({
    reducer: {
      cart: cartSlice.reducer,
      notifications: notificationsSlice.reducer,
      filters: filterSlice.reducer,
    },
  });
  
  export const { addToCart } = cartSlice.actions;
  export const { addNotification } = notificationsSlice.actions;
  export const { setFilter } = filterSlice.actions;