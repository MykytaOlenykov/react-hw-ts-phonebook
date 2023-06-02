import styled from 'styled-components';

export const ContactForm = styled.form`
  max-width: 452px;
  width: 100%;
  padding: 28px 24px;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 15px;
  box-shadow: 0px 7px 23px rgba(0, 0, 0, 0.05);

  @media screen and (min-width: ${({ theme }) => theme.breakpoint}) {
    padding: 45px 51px;
  }
`;

export const Input = styled.input`
  display: block;
  padding: 15px 20px;
  width: 100%;
  font-size: 14px;
  line-height: 1.4;
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

export const Label = styled.label`
  display: block;
  margin-bottom: 24px;
`;

export const TextLabel = styled.span`
  display: block;
  margin-bottom: 5.5px;
  font-size: 14px;
  line-height: 1.4;

  word-wrap: break-word;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
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

export const ErrorText = styled.span`
  padding: 2px;
  font-size: 12px;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.errorText};
`;
