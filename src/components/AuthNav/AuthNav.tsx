import React from "react";
import * as S from "./AuthNav.styled";

interface IProps {
  className?: string;
}

export const AuthNav: React.FC<IProps> = ({ className }) => (
  <S.List className={className}>
    <li>
      <S.Link to="/register">
        <S.Thumb>
          <S.SignUpIcon />
        </S.Thumb>
        Sign up
      </S.Link>
    </li>
    <li>
      <S.Link to="/login">
        <S.Thumb>
          <S.SignInIcon />
        </S.Thumb>
        Sign in
      </S.Link>
    </li>
  </S.List>
);
