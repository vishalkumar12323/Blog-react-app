import { configureStore } from "@reduxjs/toolkit";
import { authSlices } from "./authSlice";
import { blogSlices } from "./blogSlice";

const store = configureStore({
  reducer: {
    auth: authSlices.reducer,
    blogs: blogSlices.reducer,
  },
});

export { store };
