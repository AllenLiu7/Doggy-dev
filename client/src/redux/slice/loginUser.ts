import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { loginUserReq, registerUserReq } from '../../service/api/auth';

export const initialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  errorMessage: '',
  currentUser: null,
  token: null,
};

export const loginUserThunk = createAsyncThunk(
  'user/loginUser',
  async (formValue, thunkAPI) => {
    try {
      const response = await loginUserReq(formValue);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const signUpUser = createAsyncThunk(
  'user/signUpUser',
  async (formValue, thunkAPI) => {
    try {
      const response = await registerUserReq(formValue);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const { reducer, actions } = createSlice({
  name: 'user',
  initialState,
  reducers: {
    clearState(state) {
      state.isSuccess = false;
      state.isError = false;
      state.errorMessage = '';
    },
    logoutUser(state) {
      state.currentUser = null;
      state.token = null;
    },
    updateUser(state, { payload }) {
      state.currentUser = payload;
    },
    updateToken(state, { payload }) {
      state.token = payload.token;
    },
    follow(state, { payload }) {
      state.currentUser.followings.push(payload);
    },
    unfollow(state, { payload }) {
      state.currentUser.followings = state.currentUser.followings.filter(
        (userId) => userId !== payload
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginUserThunk.fulfilled, (state, { payload }) => {
      state.currentUser = payload.currentUser;
      state.token = payload.token;
      state.isLoading = false;
      state.isSuccess = true;
    });
    builder.addCase(loginUserThunk.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(loginUserThunk.rejected, (state, { payload }) => {
      //console.log(payload);
      state.isLoading = false;
      state.isError = true;
      state.errorMessage = payload.message;
    });
    builder.addCase(signUpUser.fulfilled, (state, { payload }) => {
      state.currentUser = payload;
      state.isLoading = false;
      state.isSuccess = true;
    });
    builder.addCase(signUpUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(signUpUser.rejected, (state, { payload }) => {
      console.log(payload);
      state.isLoading = false;
      state.isError = true;
      state.errorMessage = payload.message;
    });
  },
});

export default reducer;

//action
export const {
  clearState,
  logoutUser,
  follow,
  unfollow,
  updateUser,
  updateToken,
} = actions;

//selector
export const currentUserSelector = (state) => state.currentUser;
