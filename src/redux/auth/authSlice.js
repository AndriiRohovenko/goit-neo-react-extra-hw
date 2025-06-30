import { createSlice } from '@reduxjs/toolkit';

import {
  fetchUserInfoThunk,
  loginActionThunk,
  signUpActionThunk,
  logOutActionThunk,
} from './authOps';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: {
      name: '',
      email: '',
    },
    token: null,
    isLoggedIn: false,
    isLoading: false,
    error: null,
    isRefreshing: false,
  },
  extraReducers: builder => {
    builder
      .addCase(signUpActionThunk.pending, handlePending)
      .addCase(signUpActionThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(signUpActionThunk.rejected, handleRejected)

      .addCase(loginActionThunk.pending, handlePending)
      .addCase(loginActionThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(loginActionThunk.rejected, handleRejected)

      .addCase(logOutActionThunk.pending, handlePending)
      .addCase(logOutActionThunk.fulfilled, state => {
        state.isLoggedIn = false;
        state.user = {
          name: '',
          email: '',
        };
        state.token = null;
      })
      .addCase(logOutActionThunk.rejected, handleRejected)

      .addCase(fetchUserInfoThunk.pending, state => {
        state.isLoading = true;
        state.isRefreshing = true;
      })
      .addCase(fetchUserInfoThunk.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.user = action.payload;
        state.isRefreshing = false;
      })
      .addCase(fetchUserInfoThunk.rejected, handleRejected);
  },
});

export const authReducer = authSlice.reducer;

export const selectLoggedIn = state => state.auth.isLoggedIn;
export const selectUser = state => state.auth.user;
export const selectIsRefreshing = state => state.auth.isRefreshing;
