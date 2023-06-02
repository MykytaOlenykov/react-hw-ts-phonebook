import React, { ReactElement } from "react";
import * as S from "./MobileMenu.styled";

interface IProps {
  isOpenMenu: boolean;
  children: ReactElement;
}

export const MobileMenu: React.FC<IProps> = ({ isOpenMenu, children }) => {
  return (
    <S.Container className={isOpenMenu ? "active" : ""}>{children}</S.Container>
  );
};
