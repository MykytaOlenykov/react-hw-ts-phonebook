import styled from 'styled-components';

export const List = styled.ul`
  height: 350px;
  overflow: auto;
  padding-right: 12px;

  &::-webkit-scrollbar {
    width: 6px;
    background-color: ${({ theme }) => theme.colors.secondaryBg};
    border-radius: 12px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 12px;
    background-color: ${({ theme }) => theme.colors.accent};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint}) {
    padding-right: 24px;
  }
`;

export const Item = styled.li`
  &:not(:last-child) {
    margin-bottom: 24px;
  }
`;
