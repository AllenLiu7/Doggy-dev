import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { getRecommandUsersReq } from '../../service/api/user';
import { follow } from './loginUser';

export const initialState = {
  loading: false,
  hasErrors: false,
  recommandUsers: [],
};

//Async Thunk Action
//currently fetch users that are not followed
export const fetchRecommandUsers = createAsyncThunk(
  'recommandUsers/fetchRecommandUsers', //name of your slice plus the name of thunk creator
  async (id: string) => {
    try {
      const response = await getRecommandUsersReq(id);
      return response.data;
    } catch (error) {
      throw Error(`${error}`);
    }
  }
);

const { reducer } = createSlice({
  name: 'recommandUsers',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchRecommandUsers.fulfilled, (state, action) => {
      state.recommandUsers = action.payload;
      state.loading = false;
      state.hasErrors = false;
    });
    builder.addCase(fetchRecommandUsers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchRecommandUsers.rejected, (state) => {
      state.loading = false;
      state.hasErrors = true;
    });
    builder.addCase(follow, (state, { payload }) => {
      const newUsers = state.recommandUsers.filter(
        (user) => user._id !== payload
      );
      state.recommandUsers = newUsers;
    });
  },
});

export default reducer;

//selectors
export const recommandUsersSelector = (state) =>
  state.recommandUsers.recommandUsers;
