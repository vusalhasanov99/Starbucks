import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  // diğer durumlar
};

const mySlice = createSlice({
  name: 'mySlice',
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    // diğer işlevler
  },
});
export const { setLoading } = mySlice.actions;

export default mySlice.reducer