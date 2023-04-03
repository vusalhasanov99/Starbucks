import { createSlice } from '@reduxjs/toolkit';
import products from '../../datas/Products';
const initialState = {
    products: products,
 
  };
  
const productSlice = createSlice({
    name: 'products',
    initialState
})
export default productSlice.reducer;