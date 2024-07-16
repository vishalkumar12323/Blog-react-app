import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { authService } from "../services/auth_service";

export const getSession = createAsyncThunk("fetch/user", async () => {
  return await authService.getSession();
});

const initialAuthState = {
  loading: true,
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
    logout: (state, action) => {
      state.loading = false;
      state.status = false;
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getSession.pending, (state, action) => {
      state.loading = true;
      state.status = false;
      state.user = {
        ...action.payload,
        id: "",
        name: "",
        email: "",
      };
    });
    builder.addCase(getSession.fulfilled, (state, action) => {
      state.loading = false;
      state.status = true;
      state.user = {
        ...action.payload,
        id: action.payload.$id,
        name: action.payload.name,
        email: action.payload.email,
      };
    });
    builder.addCase(getSession.rejected, (state, action) => {
      state.loading = false;
      state.status = false;
      state.user = {
        id: "",
        name: "",
        email: "",
      };
    });
  },
});

export const { logout } = authSlices.actions;
export const session = (state) => state.auth;

export { authSlices };
