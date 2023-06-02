import { RootState } from "redux/store";

export const selectUser = (state: RootState) => state.auth.user;

export const selectIsLoggedIn = (state: RootState) => state.auth.isLoggedIn;

export const selectIsRefreshing = (state: RootState) => state.auth.isRefreshing;

export const selectIsLoading = (state: RootState) => state.auth.isLoading;

export const selectError = (state: RootState) => state.auth.error;
