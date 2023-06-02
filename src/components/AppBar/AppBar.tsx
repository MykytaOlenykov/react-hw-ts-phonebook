import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useAuth } from "hooks";
import { Navigation } from "components/Navigation";
import { MobileMenu } from "components/MobileMenu";
import { UserMenu } from "components/UserMenu";
import { AuthNav } from "components/AuthNav";
import * as S from "./AppBar.styled";

export const AppBar: React.FC = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const location = useLocation();
  const { isLoggedIn } = useAuth();

  const handleToggleMenu = (): void => {
    setIsOpenMenu((prevState) => !prevState);
  };

  useEffect(() => {
    const handleHideMenu = (e: MediaQueryListEvent): void => {
      if (!e.matches) {
        return;
      }

      setIsOpenMenu(false);
    };

    window
      .matchMedia("(min-width: 680px)")
      .addEventListener("change", handleHideMenu);
  }, []);

  useEffect(() => {
    setIsOpenMenu(false);
  }, [location]);

  return (
    <S.Container>
      <S.Header>
        <Navigation />

        {isLoggedIn ? (
          <UserMenu className="desktop" />
        ) : (
          <AuthNav className="desktop" />
        )}

        <S.Button onClick={handleToggleMenu} type="button">
          {isOpenMenu ? <S.CloseIcon /> : <S.OpenIcon />}
        </S.Button>
      </S.Header>

      <MobileMenu isOpenMenu={isOpenMenu}>
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </MobileMenu>
    </S.Container>
  );
};
