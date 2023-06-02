import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.accent};
`;

export const ErrorMessage = styled.p`
  font-size: 48px;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.primary};
`;

export const ErrorCode = styled.p`
  font-size: 60px;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.primary};
`;

export const HomePageLink = styled(Link)`
  display: inline-block;
  padding: 4px 8px;

  font-size: 24px;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.secondary};
`;
