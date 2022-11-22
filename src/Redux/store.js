import { configureStore } from '@reduxjs/toolkit';
import categorySlice from './Slices/categorySlice';
import paginationSlice from './Slices/paginationSlice';

export const store = configureStore({
  reducer: {
    category: categorySlice,
    pagination: paginationSlice,
  },
});

// export type RootState = ReturnType<typeof store.getState>;

// export type AppDispatch = typeof store.dispatch;
