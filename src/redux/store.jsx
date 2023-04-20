import { configureStore } from '@reduxjs/toolkit';
import productReducer from './controls/ProductItems';
import auth from'./controls/auth'
import post from'./controls/post'
import user from'./controls/user'
import login from'./controls/login'
export const store = configureStore({
  reducer: {
    product: productReducer,
    auth,
    post,
    user,
    login
  },
});
