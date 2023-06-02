import React from "react";
import { useAuth } from "hooks";
import * as S from "./Navigation.styled";

export const Navigation: React.FC = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <S.List>
        <li>
          <S.Link to="/">
            <S.Thumb>
              <S.HomeIcon />
            </S.Thumb>
            Home
          </S.Link>
        </li>
        {isLoggedIn && (
          <li>
            <S.Link to="/contacts">
              <S.Thumb>
                <S.ContactsIcon />
              </S.Thumb>
              Contacts
            </S.Link>
          </li>
        )}
      </S.List>
    </nav>
  );
};
