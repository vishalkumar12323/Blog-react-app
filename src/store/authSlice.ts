import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { authService } from "../services/auth_service";
import { RootState } from "./store.ts";
import { IUserProps, IAuthResponse } from "../lib/definations.ts";

export const getSession = createAsyncThunk("fetch/user", async () => {
  return await authService.getSession();
});

const initialAuthState: IAuthResponse = {
  loading: true,
  status: false,
  user: {
    name: "",
    email: "",
  } as IUserProps,
};

const authSlices = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    logout: (state) => {
      state.loading = false;
      state.status = false;
      state.user = {
        name: "",
        email: "",
      } as IUserProps;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getSession.pending, (state, action) => {
      state.loading = true;
      state.status = false;
      state.user = {} as IUserProps;
    });
    builder.addCase(getSession.fulfilled, (state, action) => {
      state.loading = false;
      state.status = true;
      state.user = action.payload as IUserProps;
    });
    builder.addCase(getSession.rejected, (state) => {
      state.loading = false;
      state.status = false;
      state.user = {
        name: "",
        email: "",
      } as IUserProps;
    });
  },
});

export const { logout } = authSlices.actions;
export const session = (state: RootState) => state.auth;

export { authSlices };
