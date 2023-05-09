import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
};

const mySlice = createSlice({
  name: 'mySlice',
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});
export const { setLoading } = mySlice.actions;

export default mySlice.reducer