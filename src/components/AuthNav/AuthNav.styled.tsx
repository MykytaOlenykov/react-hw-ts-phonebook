import { NavLink } from 'react-router-dom';
import { IoIosRocket } from 'react-icons/io';
import { IoKeySharp } from 'react-icons/io5';
import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  gap: 32px;

  @media screen and (max-width: calc(${({ theme }) =>
      theme.breakpoint} - 1px)) {
    &.desktop {
      display: none;
    }
    gap: 12px;
  }
`;

export const SignUpIcon = styled(IoIosRocket)`
  width: 15px;
  height: 15px;
  fill: ${({ theme }) => theme.colors.accent};
`;

export const SignInIcon = styled(IoKeySharp)`
  width: 15px;
  height: 15px;
  fill: ${({ theme }) => theme.colors.accent};
`;

export const Thumb = styled.span`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  background-color: ${({ theme }) => theme.colors.primary};
  box-shadow: 0px 3.5px 5.5px rgba(0, 0, 0, 0.02);
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 12px;
  transition: border-color
    ${({ theme }) => `${theme.duration} ${theme.timingFunction}`};
`;

export const Link = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 4px;
  font-style: normal;
  white-space: nowrap;
  font-weight: 700;
  font-size: 12px;
  line-height: 1.5;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.secondaryText};

  &.active {
    & ${SignUpIcon} {
      fill: ${({ theme }) => theme.colors.primary};
    }

    & ${SignInIcon} {
      fill: ${({ theme }) => theme.colors.primary};
    }

    & ${Thumb} {
      background-color: ${({ theme }) => theme.colors.accent};
    }
  }

  &:hover:not(.active) ${Thumb} {
    border-color: ${({ theme }) => theme.colors.accent};
  }
`;
