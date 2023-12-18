import { createSlice } from "@reduxjs/toolkit";
import { logIn } from "../action/userAction";
import { signUp } from "../action/userAction";

let initialState = {
  userInfo: {},
  status: "idle",
  error: null, 
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUserData: (state, action) => {
      state.userInfo = action.payload.data;
      state.userId = action.payload.userId;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(logIn.pending, (state) => {
        state.status = 'pending';
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.userInfo = action.payload;
      })
      .addCase(logIn.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(signUp.pending, (state) => {
        state.status = 'pending';
      })
      .addCase(signUp.fulfilled, (state) => {
        state.status = 'succeeded';
      })
      .addCase(signUp.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
  }
});

export const { setUserData } = authSlice.actions;
export default authSlice.reducer;
