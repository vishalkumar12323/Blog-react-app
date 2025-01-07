import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "../services/db_service";
import {
  IBlogsResponse,
  IBlogProps,
  IBlogResponse,
} from "../lib/definations.ts";
import { RootState } from "./store.ts";

export const fetchBlogs = createAsyncThunk("fetch/blogs", async () => {
  return await db.getAllBlog();
});

export const fetchBlogWithId = createAsyncThunk(
  "blogs/fetchById",
  async (id: string) => {
    return await db.getBlog(id);
  }
);

const initialState: IBlogsResponse = {
  documents: [] as IBlogProps[],
  isFetching: false,
  error: null,
  total: 0,
};

const blogSlices = createSlice({
  name: "blog",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchBlogs.pending, (state) => {
      state.isFetching = true;
      state.documents = [];
      state.error = null;
      state.total = state.documents.length;
    });

    builder.addCase(fetchBlogs.fulfilled, (state, action) => {
      state.isFetching = false;
      state.documents = action.payload.documents;
      state.error = action.payload.error;
      state.total = action.payload.total;
    });
    builder.addCase(fetchBlogs.rejected, (state, action) => {
      // console.log(action);
      state.isFetching = false;
      state.documents = [];
      state.total = 0;
      state.error = action.payload as string;
    });
  },
});

const blogByIdState: IBlogResponse = {
  document: {
    id: "",
    heading: "",
    content: "",
    coverImage: "",
    slug: "",
    userId: "",
    status: "",
  } as IBlogProps,
  isFetching: false,
  error: null,
};

const getBlogWithId = createSlice({
  name: "blog/id",
  initialState: blogByIdState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchBlogWithId.pending, (state) => {
      state.isFetching = true;
      state.document = {} as IBlogProps;
      state.error = null;
    });
    builder.addCase(fetchBlogWithId.fulfilled, (state, action) => {
      state.isFetching = false;
      state.document = action.payload;
      state.error = null;
    });
    builder.addCase(fetchBlogWithId.rejected, (state, action) => {
      // console.log(action);
      state.isFetching = false;
      state.document = {} as IBlogProps;
      state.error = action.payload as string;
    });
  },
});
export const getBlogs = (state: RootState) => state.blogs;

export { blogSlices, getBlogWithId };
