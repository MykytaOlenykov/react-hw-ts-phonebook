import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  margin-left: auto;
  margin-right: auto;
  padding: 24px;
  max-width: 1280px;
  min-width: 310px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoint}) {
    padding: 48px;
  }
`;
