import { IoLogOut } from 'react-icons/io5';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  gap: 32px;
  align-items: center;

  @media screen and (max-width: calc(${({ theme }) =>
      theme.breakpoint} - 1px)) {
    &.desktop {
      display: none;
    }
    gap: 12px;
  }
`;

export const Email = styled.p`
  max-width: 120px;
  font-weight: 700;
  font-size: 12px;
  line-height: 1.5;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  color: ${({ theme }) => theme.colors.secondaryText};

  @media screen and (min-width: ${({ theme }) => theme.breakpoint}) {
    max-width: 180px;
  }
`;

export const LogoutIcon = styled(IoLogOut)`
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

export const Logout = styled.button`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 0;
  font-weight: 700;
  white-space: nowrap;
  font-size: 12px;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.secondaryText};
  background-color: transparent;
  border: none;
  cursor: pointer;

  &:not(:disabled):hover ${Thumb} {
    border-color: ${({ theme }) => theme.colors.accent};
  }
`;
