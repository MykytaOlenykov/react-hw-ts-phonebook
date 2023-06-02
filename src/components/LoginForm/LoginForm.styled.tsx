import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Title = styled.p`
  display: block;
  margin-bottom: 36px;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.4;
  color: ${({ theme }) => theme.colors.secondaryText};
`;

export const LoginForm = styled.form`
  max-width: 353px;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 24px;
`;

export const TextLabel = styled.span`
  display: block;
  margin-bottom: 5.5px;
  font-size: 14px;
  line-height: 1.4;
`;

export const Input = styled.input`
  display: block;
  padding: 15px 20px;
  width: 100%;
  font-size: 14px;
  line-height: 1.4;
  background-color: ${({ theme }) => theme.colors.primary};
  border: 1px solid ${({ theme }) => theme.colors.inputBorder};
  border-radius: 15px;
  outline: none;

  &::placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 1.4;
    color: ${({ theme }) => theme.colors.secondaryText};
  }

  &:focus {
    border-color: ${({ theme }) => theme.colors.accent};
  }
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  margin-bottom: 22px;
  padding: 14px;
  width: 100%;
  font-weight: 700;
  font-size: 10px;
  line-height: 1.5;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.accent};
  border: 1px solid ${({ theme }) => theme.colors.accent};
  border-radius: 12px;
  transition: background-color
      ${({ theme }) => `${theme.duration} ${theme.timingFunction}`},
    color ${({ theme }) => `${theme.duration} ${theme.timingFunction}`};
  cursor: pointer;

  &:hover:not(:disabled) {
    color: ${({ theme }) => theme.colors.accent};
    background-color: ${({ theme }) => theme.colors.primary};
  }

  &:disabled {
    opacity: 0.8;
  }
`;

export const Text = styled.span`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 4px;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.4;
  text-align: center;
  color: ${({ theme }) => theme.colors.secondaryText};
`;

export const SignInLink = styled(Link)`
  position: relative;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.accent};

  &::after {
    content: '';
    position: absolute;
    bottom: 1.5px;
    left: 0;
    display: block;
    height: 1px;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.accent};
    opacity: 0;
    transition: opacity
      ${({ theme }) => `${theme.duration} ${theme.timingFunction}`};
  }

  &:hover::after {
    opacity: 1;
  }
`;

export const ErrorText = styled.span`
  padding: 2px;
  font-size: 12px;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.errorText};
`;
