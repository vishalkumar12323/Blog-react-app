import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
  status: false,
  user: {
    id: "",
    name: "",
    email: "",
  },
};

const initialBlogState = {
  blogs: [
    {
      title: "",
      content: "",
      articleimage: "",
      userid: "",
      status: "",
      slug: "",
    },
  ],
};
const authSlices = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    login: (state, action) => {
      state.status = true;
      state.user = {
        id: action.payload.user?.$id,
        name: action.payload.user?.name,
        email: action.payload.user?.email,
      };
    },

    logout: (state) => {
      state.status = false;
      state.user = null;
    },
  },
});

const blogSlices = createSlice({
  name: "blog",
  initialState: initialBlogState,
  reducers: {
    addBlog: (state, action) => {
      const blog = action.payload;
      state.blogs = [{ ...blog }];
    },
    updateBlog: (state, action) => {},
    deleteBlog: (state, action) => {},
  },
});

export const { login, logout } = authSlices.actions;
export const { addBlog, deleteBlog, updateBlog } = blogSlices.actions;
export const getAuthState = (state) => state.auth;
export const getBlogs = (state) => state.blogs;
export { authSlices, blogSlices };
