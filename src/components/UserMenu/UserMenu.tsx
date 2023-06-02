import React, { useEffect } from "react";
import { toast } from "react-hot-toast";
import { useAppDispatch } from "hooks";
import { clearError } from "redux/auth/slice";
import { logOut } from "redux/auth/operations";
import { useAuth } from "hooks";
import { Loader } from "components/Loader";
import * as S from "./UserMenu.styled";

interface IProps {
  className?: string;
}

export const UserMenu: React.FC<IProps> = ({ className }) => {
  const dispatch = useAppDispatch();
  const { user, isLoading, error } = useAuth();

  useEffect(() => {
    if (error) {
      toast.error("Something went wrong, please try again later.");
      dispatch(clearError());
    }
  }, [error, dispatch]);

  const handleClick = (): void => {
    dispatch(logOut());
  };

  return (
    <S.Container className={className}>
      <S.Email>{user.email}</S.Email>
      <S.Logout type="button" onClick={handleClick} disabled={isLoading}>
        <S.Thumb>
          {isLoading ? (
            <Loader width="15" height="15" color="#4FD1C5" />
          ) : (
            <S.LogoutIcon />
          )}
        </S.Thumb>
        Log out
      </S.Logout>
    </S.Container>
  );
};
