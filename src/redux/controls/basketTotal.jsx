import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  total: localStorage.getItem('total')? +localStorage.getItem('total') : 0,
};

const totalSlice = createSlice({
  name: 'total',
  initialState,
  reducers: {
    updateTotal: (state, action) => {
      state.total = action.payload;
      localStorage.setItem('total', state.total);
    },
  },
});

export const { updateTotal } = totalSlice.actions;

export default totalSlice.reducer;