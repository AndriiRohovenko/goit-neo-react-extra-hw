import { createSlice } from '@reduxjs/toolkit';

import {
  //   fetchUserInfoThunk,
  loginActionThunk,
  signUpActionThunk,
  //   logOutActionThunk,
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
      .addCase(loginActionThunk.rejected, handleRejected);

    //   .addCase(deleteContactThunk.pending, handlePending)
    //   .addCase(deleteContactThunk.fulfilled, (state, action) => {
    //     const index = state.items.findIndex(task => task.id === action.payload);
    //     state.items.splice(index, 1);
    //   })
    //   .addCase(deleteContactThunk.rejected, handleRejected);
  },
});

export const authReducer = authSlice.reducer;

export const selectLoggedIn = state => state.auth.isLoggedIn;
export const selectUser = state => state.auth.user;
