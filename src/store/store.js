import { configureStore } from "@reduxjs/toolkit";
import { authSlices, blogSlices } from "./authSlice";

const store = configureStore({
  reducer: {
    auth: authSlices.reducer,
    blogs: blogSlices.reducer,
  },
});

export { store };
