import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './Slices/cartSlice';
import filterSlice from './Slices/filterSlice';

export const store = configureStore({
  reducer: {
    filter: filterSlice,
    cart: cartSlice,
  },
});

// export type RootState = ReturnType<typeof store.getState>;

// export type AppDispatch = typeof store.dispatch;
