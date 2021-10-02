import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { loginUserReq, registerUserReq } from '../../service/api/auth';
import { loginFormData, signupFormData } from '../../types/auth.type';
import { User } from '../../types/common.type';
import { RootState } from '../store';

interface userSlice {
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
  errorMessage: string | null | undefined;
  currentUser: User | null | undefined;
  token: string | null;
}

interface authResponse {
  currentUser: User;
  token: string;
}

interface reqError {
  status: boolean;
  message: string;
}

export const initialState: userSlice = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  errorMessage: '',
  currentUser: null,
  token: null,
};

export const loginUserThunk = createAsyncThunk<
  authResponse,
  loginFormData,
  {
    rejectValue: reqError;
  }
>('user/loginUser', async (formValue, thunkAPI) => {
  try {
    const response = await loginUserReq(formValue);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error as reqError);
  }
});

export const signUpUser = createAsyncThunk<
  authResponse,
  signupFormData,
  {
    rejectValue: reqError;
  }
>('user/signUpUser', async (formValue, thunkAPI) => {
  try {
    console.log(formValue);
    const response = await registerUserReq(formValue);

    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error as reqError);
  }
});

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
    updateUser(state, action: PayloadAction<User>) {
      state.currentUser = action.payload;
    },
    updateToken(state, action: PayloadAction<string>) {
      state.token = action.payload;
    },
    follow(state, action: PayloadAction<string>) {
      state?.currentUser?.followings?.push(action.payload);
    },
    unfollow(state, action: PayloadAction<string>) {
      if (state.currentUser) {
        state.currentUser.followings = state?.currentUser?.followings?.filter(
          (userId) => userId !== action.payload
        );
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginUserThunk.fulfilled, (state, action) => {
      state.currentUser = action.payload.currentUser;
      state.token = action.payload.token;
      state.isLoading = false;
      state.isSuccess = true;
    });
    builder.addCase(loginUserThunk.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(loginUserThunk.rejected, (state, action) => {
      console.log(action.payload);
      state.isLoading = false;
      state.isError = true;
      state.errorMessage = action?.payload?.message;
    });
    builder.addCase(signUpUser.fulfilled, (state, action) => {
      state.currentUser = action.payload.currentUser;
      state.token = action.payload.token;
      state.isLoading = false;
      state.isSuccess = true;
    });
    builder.addCase(signUpUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(signUpUser.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.errorMessage = action?.payload?.message;
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
export const currentUserSelector = (state: RootState) => state.currentUser;
