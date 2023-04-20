import { createSlice } from '@reduxjs/toolkit';
import products from '../../datas/Products';
import data from '../../datas/Data';
const initialState = {
user:JSON.parse(localStorage.getItem('user'))??false 

};

const auth = createSlice({
  name: 'auth',
  initialState,
  reducers:{
    login:(state,action)=>{
        localStorage.setItem('user', JSON.stringify(action.payload))
        state.user=action.payload
    },
    logout:(state,action)=>{
        localStorage.removeItem('user')
        state.user=false
    }
  }
})
export default auth.reducer;