import { configureStore } from "@reduxjs/toolkit";
import authSlices from "./authSlice";

const store = configureStore({
  reducer: authSlices.reducer,
});

export { store };
