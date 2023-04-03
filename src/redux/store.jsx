import { configureStore } from '@reduxjs/toolkit';
import productReducer from './controls/ProductItems';

export const store = configureStore({
  reducer: {
    product: productReducer,
  },
});
