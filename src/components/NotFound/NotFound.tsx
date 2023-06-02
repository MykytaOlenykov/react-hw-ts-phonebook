import React from "react";
import * as S from "./NotFound.styled";

export const NotFound: React.FC = () => (
  <S.Container>
    <S.ErrorMessage>Not Found</S.ErrorMessage>
    <S.ErrorCode>404</S.ErrorCode>
    <S.HomePageLink to="/">Home page</S.HomePageLink>
  </S.Container>
);
