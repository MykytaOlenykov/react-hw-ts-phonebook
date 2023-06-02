import React from "react";
import { Circles } from "react-loader-spinner";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 48px;
`;

export const PageLoader: React.FC = () => (
  <Container>
    <Circles
      height="60"
      width="60"
      color="#4FD1C5"
      ariaLabel="circles-loading"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />
  </Container>
);
