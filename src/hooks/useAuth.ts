import { useAppSelector } from "./useAppSelector";
import {
  selectUser,
  selectIsLoggedIn,
  selectIsRefreshing,
  selectError,
  selectIsLoading,
} from "redux/auth/selectors";

export const useAuth = () => {
  return {
    user: useAppSelector(selectUser),
    isLoggedIn: useAppSelector(selectIsLoggedIn),
    isRefreshing: useAppSelector(selectIsRefreshing),
    error: useAppSelector(selectError),
    isLoading: useAppSelector(selectIsLoading),
  };
};
