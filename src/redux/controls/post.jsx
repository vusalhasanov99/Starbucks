import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  firstname: "",
  lastname: "",
  email: "",
  password: ""
};

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    updateField: (state, action) => {
      state[action.payload.field] = action.payload.value;
    }
  }
});

export const { updateField } = postSlice.actions;

export default postSlice.reducer