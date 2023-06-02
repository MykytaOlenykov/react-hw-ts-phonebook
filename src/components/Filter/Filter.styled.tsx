import styled from 'styled-components';

export const Text = styled.p`
  margin-bottom: 12px;
  font-weight: 700;
  font-size: 18px;
  line-height: 140%;
  color: ${({ theme }) => theme.colors.primaryText};
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 24px;
`;

export const Input = styled.input`
  display: block;
  padding: 15px 20px;
  max-width: 200px;
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
