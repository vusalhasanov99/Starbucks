import { createSlice } from '@reduxjs/toolkit';

export const logInSlice = createSlice({
  name: 'logIn',
  initialState: {
    value: localStorage.getItem('isLoggedIn') === 'true',
  },
  reducers: {
    setLogIn: (state, action) => {
      state.value = action.payload;
      localStorage.setItem('isLoggedIn', action.payload);
    },
  },
});

export const { setLogIn } = logInSlice.actions;

export default logInSlice.reducer;