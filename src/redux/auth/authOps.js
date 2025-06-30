import { createAsyncThunk } from '@reduxjs/toolkit';
import { getUserInfo, login, signUp, logOut } from '../../api/user';
import { setToken, removeToken } from '../../api/apiClient';

export const fetchUserInfoThunk = createAsyncThunk(
  'auth/fetchUserInfo',
  async (_, thunkAPI) => {
    try {
      const authState = thunkAPI.getState().auth;
      const localToken = authState.token;
      setToken(localToken);
      const data = await getUserInfo();

      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
  {
    condition: (_, { getState }) => {
      const authState = getState().auth;
      const localToken = authState.token;
      return localToken !== null;
    },
  }
);

export const loginActionThunk = createAsyncThunk(
  'auth/login',
  async (body, thunkAPI) => {
    try {
      const response = await login(body);
      setToken(response.token);
      return response;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const signUpActionThunk = createAsyncThunk(
  'auth/signUp',
  async (body, thunkAPI) => {
    try {
      const response = await signUp(body);
      setToken(response.token);
      return response;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const logOutActionThunk = createAsyncThunk(
  'auth/logOut',
  async (body, thunkAPI) => {
    try {
      await logOut(body);
      return removeToken();
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
