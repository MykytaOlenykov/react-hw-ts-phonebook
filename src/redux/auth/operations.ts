import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import type { AxiosError } from 'axios';
import { RootState } from 'redux/store';

interface IAuthData {
  name: string;
  email: string;
  password: string;
}

interface IResponseData {
  user: {
    name: string;
    email: string;
  };
  token: string;
}

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const setAuthHeader = (token: string): void => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = (): void => {
  axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk<IResponseData, IAuthData>(
  'auth/register',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post<IResponseData>(
        'users/signup',
        credentials
      );

      setAuthHeader(data.token);
      return data;
    } catch (axiosError) {
      const error = axiosError as AxiosError;
      return rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk<IResponseData, Omit<IAuthData, 'name'>>(
  'auth/logIn',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post<IResponseData>(
        'users/login',
        credentials
      );

      setAuthHeader(data.token);
      return data;
    } catch (axiosError) {
      const error = axiosError as AxiosError;
      return rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk(
  'auth/logOut',
  async (_, { rejectWithValue }) => {
    try {
      await axios.post('users/logout');

      clearAuthHeader();
    } catch (axiosError) {
      const error = axiosError as AxiosError;
      return rejectWithValue(error.message);
    }
  }
);

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, { getState, rejectWithValue }) => {
    const state = getState() as RootState;
    const persistedToken = state.auth.token;

    if (!persistedToken) {
      return rejectWithValue('Unable to fetch user');
    }

    try {
      setAuthHeader(persistedToken);

      const { data } = await axios.get<IResponseData['user']>('users/current');

      return data;
    } catch (axiosError) {
      const error = axiosError as AxiosError;
      return rejectWithValue(error.message);
    }
  }
);
