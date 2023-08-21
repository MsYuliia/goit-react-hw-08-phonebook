import { createSlice } from '@reduxjs/toolkit';
import {
  createUser,
  logInUser,
  logOutUser,
  getCurentUser,
} from './authOperators';

const userInitialState = {
  user: { name: null, email: null },
  token: null,
  isLogin: false,
  isLoading: false,
  isCurrentUser: false,
  errorLogin: null,
  errorRegister: null,
};

const autchSlice = createSlice({
  name: 'createdUser',
  initialState: userInitialState,
  extraReducers: {
    [createUser.pending](state) {
      state.isLoading = true;
      state.errorRegister = null;
    },
    [createUser.fulfilled](state, action) {
      state.isLoading = false;
      state.token = action.payload.token;
      state.errorRegister = null;
      state.user = action.payload.user;
      state.isLogin = true;
    },
    [createUser.rejected](state, action) {
      state.isLoading = false;
      state.errorRegister = action.payload;
    },

    [logInUser.pending](state) {
      state.isLoading = true;
      state.errorLogin = null;
    },
    [logInUser.fulfilled](state, action) {
      state.isLoading = false;
      state.token = action.payload.token;
      state.errorLogin = null;
      state.user = action.payload.user;
      state.isLogin = true;
    },
    [logInUser.rejected](state, action) {
      state.errorLogin = action.payload;
      state.isLoading = false;
    },

    [logOutUser.pending](state) {
      state.isLoading = true;
    },
    [logOutUser.fulfilled](state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoading = false;
      state.isLogin = false;
    },

    [getCurentUser.pending](state) {
      state.isLoading = true;
      state.isCurrentUser = true;
    },
    [getCurentUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoading = false;
      state.isLogin = true;
      state.isCurrentUser = false;
    },
    [getCurentUser.rejected](state, action) {
      state.isLoading = false;
      state.isLogin = false;
      state.isCurrentUser = false;
    },
  },
});

export const createUserReducer = autchSlice.reducer;
