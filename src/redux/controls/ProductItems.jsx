import { createSlice } from '@reduxjs/toolkit';
import products from '../../datas/Products';
import data from '../../datas/Data';

const initialState = {
  products,
  data

};

const productSlice = createSlice({
  name: 'products',
  initialState
})
export default productSlice.reducer;