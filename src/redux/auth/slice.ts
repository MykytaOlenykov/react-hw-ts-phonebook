import { createSlice } from "@reduxjs/toolkit";
import { register, logIn, logOut, refreshUser } from "./operations";
import { PayloadAction, CaseReducer, AnyAction } from "@reduxjs/toolkit";

export interface IInitialState {
  user: { name: string | null; email: string | null };
  token: string | null;
  isLoading: boolean;
  error: string | null;
  isLoggedIn: boolean;
  isRefreshing: boolean;
}

interface IPayload {
  user: { name: string; email: string };
  token: string;
}

const handlePending: CaseReducer<IInitialState> = (state) => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected: CaseReducer<IInitialState, AnyAction> = (
  state,
  action
) => {
  state.error = action.payload;
  state.isLoading = false;
};

const initialState: IInitialState = {
  user: { name: null, email: null },
  token: null,
  isLoading: false,
  error: null,
  isLoggedIn: false,
  isRefreshing: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    clearError(state) {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.fulfilled, (state, action: PayloadAction<IPayload>) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.isLoading = false;
      })
      .addCase(logIn.fulfilled, (state, action: PayloadAction<IPayload>) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.isLoading = false;
      })
      .addCase(logOut.fulfilled, (state) => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
        state.isLoading = false;
      })
      .addCase(
        refreshUser.fulfilled,
        (state, action: PayloadAction<IPayload["user"]>) => {
          state.user = action.payload;
          state.isLoggedIn = true;
          state.isRefreshing = false;
        }
      )
      .addCase(register.pending, handlePending)
      .addCase(logIn.pending, handlePending)
      .addCase(logOut.pending, handlePending)
      .addCase(refreshUser.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(register.rejected, handleRejected)
      .addCase(logIn.rejected, handleRejected)
      .addCase(logOut.rejected, handleRejected)
      .addCase(refreshUser.rejected, (state) => {
        state.isRefreshing = false;
      });
  },
});

export const { clearError } = authSlice.actions;
export const authReducer = authSlice.reducer;
