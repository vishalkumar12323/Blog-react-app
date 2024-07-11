import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
  status: false,
  user: {
    id: "",
    name: "",
    email: "",
  },
};

const authSlices = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    login: (state, action) => {
      state.status = true;

      state.user = {
        ...action.payload,
      };
    },

    logout: (state) => {
      state.status = false;
      state.user = null;
    },
  },
});

export const { login, logout } = authSlices.actions;

export const getAuthState = (state) => state.auth;

export { authSlices };
