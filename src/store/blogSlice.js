import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "../services/db_service";

export const fetchBlogs = createAsyncThunk("fetch/blog", async () => {
  return await db.getAllBlog();
});

export const fetchBlogWithId = createAsyncThunk("fetch/blog/id", async (id) => {
  return await db.getBlog(id);
});
const initialState = {
  isFetching: true,
  documents: [],
  total: 0,
  error: null,
};

const blogSlices = createSlice({
  name: "blog",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchBlogs.pending, (state, action) => {
      state.isFetching = true;
      state.documents = [];
      state.total = 0;
      state.error = null;
    });
    builder.addCase(fetchBlogs.fulfilled, (state, action) => {
      state.isFetching = false;
      state.documents = action.payload.documents;
      state.total = action.payload.total;
      state.error = null;
    });
    builder.addCase(fetchBlogs.rejected, (state, action) => {
      state.isFetching = false;
      state.documents = [];
      state.total = [];
      state.error = action.payload.message;
    });
  },
});

const getBlogWithId = createSlice({
  name: "blog/id",
  initialState: {
    isFetching: true,
    document: [],
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBlogWithId.pending, (state, action) => {
      state.isFetching = true;
      state.document = [];
      state.error = null;
    });
    builder.addCase(fetchBlogWithId.fulfilled, (state, action) => {
      state.isFetching = false;
      state.document = action.payload;
      state.error = null;
    });
    builder.addCase(fetchBlogWithId.rejected, (state, action) => {
      state.isFetching = false;
      state.document = [];
      state.total = [];
      state.error = action.payload.message;
    });
  },
});
export const getBlogs = (state) => state.blogs;

export { blogSlices, getBlogWithId };
