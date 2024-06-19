import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: false,
  user: null,
};
const authSlices = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.status = true;
      state.user = action.payload.user;
    },

    logout: (state) => {
      state.status = false;
      state.user = null;
    },
  },
});

export const { login, logout } = authSlices.actions;
export const authState = (state) => state.status;
export default authSlices;
