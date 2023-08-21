import { createSelector } from '@reduxjs/toolkit';

export const selectUser = state => state.user.user;
export const selectLogin = state => state.user.isLogin;
export const selectPending = state => state.user.isLoading;
export const selectIsCurrentUser = state => state.user.isCurrentUser;
export const selectErrorLogin = state => state.user.errorLogin;
export const selectErrorRegister = state => state.user.errorRegister;

export const selectErrorStatusLogin = createSelector(
  [selectErrorLogin],
  error => {
    return error;
  }
);
export const selectErrorStatusRegister = createSelector(
  [selectErrorRegister],
  error => {
    return error;
  }
);
