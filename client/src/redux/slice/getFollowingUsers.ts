import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { getFollowingUsersReq } from '../../service/api/user';

export const initialState = {
  loading: false,
  hasErrors: false,
  followingUsers: [],
};

//Async Thunk Action
export const fetchFollowingUsers = createAsyncThunk(
  'userFollowings/fetchFollowings', //name of your slice plus the name of thunk creator
  async () => {
    try {
      const response = await getFollowingUsersReq();
      return response.data;
    } catch (error) {
      throw Error(`${error}`);
    }
  }
);

const { reducer } = createSlice({
  name: 'followings',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchFollowingUsers.fulfilled, (state, action) => {
      state.followingUsers = action.payload;
      state.loading = false;
      state.hasErrors = false;
    });
    builder.addCase(fetchFollowingUsers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchFollowingUsers.rejected, (state) => {
      state.loading = false;
      state.hasErrors = true;
    });
  },
});

export default reducer;

//selectors
export const followingUsersSelector = (state) =>
  state.followingUsers.followingUsers;
