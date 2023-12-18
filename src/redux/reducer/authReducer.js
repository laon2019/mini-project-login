import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  username: null,
  id: null,
  password: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUserData: (state, action) => {
      state.username = action.payload.username;
      state.id = action.payload.id;
      state.password = action.payload.password;
    },
  },
});

export const { setUserData } = authSlice.actions;
export default authSlice.reducer;
