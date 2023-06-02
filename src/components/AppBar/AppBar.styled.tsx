import { RxHamburgerMenu, RxCross2 } from 'react-icons/rx';
import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
`;

export const Header = styled.header`
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  padding: 18px 24px;
  background-image: linear-gradient(
    112.83deg,
    rgba(255, 255, 255, 0.82) 0%,
    rgba(255, 255, 255, 0.8) 110.84%
  );
  border: 1.5px solid ${({ theme }) => theme.colors.primary};
  background-size: cover;
  box-shadow: 0px 7px 23px rgba(0, 0, 0, 0.05);
  backdrop-filter: blur(10.5px);
  border-radius: 15px;
`;

export const OpenIcon = styled(RxHamburgerMenu)`
  width: 20px;
  height: 20px;
  color: ${({ theme }) => theme.colors.accent};
`;

export const CloseIcon = styled(RxCross2)`
  width: 20px;
  height: 20px;
  color: ${({ theme }) => theme.colors.accent};
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  padding: 0;
  background-color: ${({ theme }) => theme.colors.primary};
  box-shadow: 0px 3.5px 5.5px rgba(0, 0, 0, 0.02);
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 12px;
  transition: border-color
    ${({ theme }) => `${theme.duration} ${theme.timingFunction}`};
  cursor: pointer;

  &:hover {
    border-color: ${({ theme }) => theme.colors.accent};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint}) {
    display: none;
  }
`;
