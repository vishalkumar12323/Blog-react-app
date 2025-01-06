import { configureStore } from "@reduxjs/toolkit";
import { authSlices } from "./authSlice";
import { blogSlices, getBlogWithId } from "./blogSlice";

const store = configureStore({
  reducer: {
    auth: authSlices.reducer,
    blogs: blogSlices.reducer,
    blogWithId: getBlogWithId.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export { store };
