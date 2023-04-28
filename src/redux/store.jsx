import { configureStore } from '@reduxjs/toolkit';
import productReducer from './controls/ProductItems';
import auth from'./controls/auth'
import post from'./controls/post'
import user from'./controls/user'
import loading from'./controls/loading'
export const store = configureStore({
  reducer: {
    product: productReducer,
    auth,
    post,
    user,
    loading
  },
});
