import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { deletePostsReq, getTimelinePostsReq } from '../../service/api/post';

export const initialState = {
  loading: false,
  hasErrors: false,
  posts: [],
};

//Async Thunk Action-----------------------------------------------------------------------------------
//get all posts
export const fetchTimelinePosts = createAsyncThunk(
  'timelinePosts/fetchTimelinePosts', //name of your slice plus the name of thunk creator
  async (id: string) => {
    try {
      const response = await getTimelinePostsReq(id);
      return response.data;
    } catch (error) {
      throw Error(`${error}`);
    }
  }
);

//delete post
export const deletePost = createAsyncThunk(
  'timelinePosts/deletePost', //name of your slice plus the name of thunk creator
  async (id: string) => {
    try {
      await deletePostsReq(id);
      return id;
    } catch (error) {
      throw Error(`${error}`);
    }
  }
);

const { reducer } = createSlice({
  name: 'timelinePosts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    //fetchTimelinePosts----------------------------------------------------------------------------------------
    builder.addCase(fetchTimelinePosts.fulfilled, (state, action) => {
      state.posts = action.payload.sort((p1, p2) => {
        return new Date(p2.createdAt) - new Date(p1.createdAt);
      });
      state.loading = false;
      state.hasErrors = false;
    });
    builder.addCase(fetchTimelinePosts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchTimelinePosts.rejected, (state) => {
      state.loading = false;
      state.hasErrors = true;
    });
    //deletePost-------------------------------------------------------------------------------------------------
    builder.addCase(deletePost.fulfilled, (state, { payload }) => {
      state.posts = state.posts.filter((post) => post._id !== payload);
      state.loading = false;
      state.hasErrors = false;
    });
    builder.addCase(deletePost.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(deletePost.rejected, (state) => {
      state.loading = false;
      state.hasErrors = true;
    });
  },
});

export default reducer;

//selectors
export const timelinePostsSelector = (state) => state.timelinePosts.posts;
