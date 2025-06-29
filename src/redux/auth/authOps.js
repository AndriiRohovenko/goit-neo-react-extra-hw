import { createAsyncThunk } from '@reduxjs/toolkit';
import { getUserInfo, login, signUp, logOut } from '../../api/user';

export const fetchUserInfoThunk = createAsyncThunk(
  'auth/fetchUserInfo',
  async (_, thunkAPI) => {
    try {
      const data = await getUserInfo();
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const loginActionThunk = createAsyncThunk(
  'auth/login',
  async (body, thunkAPI) => {
    try {
      const data = await login(body);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const signUpActionThunk = createAsyncThunk(
  'auth/signUp',
  async (body, thunkAPI) => {
    try {
      const data = await signUp(body);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const logOutActionThunk = createAsyncThunk(
  'auth/logOut',
  async (body, thunkAPI) => {
    try {
      const data = await logOut(body);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
