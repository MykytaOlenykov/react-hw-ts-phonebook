import React from "react";
import { useAuth } from "hooks";
import * as S from "./Home.styled";

const Home: React.FC = () => {
  const {
    user: { name },
    isLoggedIn,
  } = useAuth();

  return (
    <S.Section>
      <S.SectionTitle>Phonebook home page</S.SectionTitle>
      {isLoggedIn ? (
        <S.Title>Welcome, {name}!</S.Title>
      ) : (
        <S.Title>Welcome!</S.Title>
      )}
      <S.Text>
        Discover a world of contacts at your fingertips with our intuitive
        phonebook. Find businesses, services, and friends effortlessly. Simplify
        your search today!
      </S.Text>
    </S.Section>
  );
};

export default Home;
