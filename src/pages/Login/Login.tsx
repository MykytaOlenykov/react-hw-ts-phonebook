import React from 'react';
import { LoginForm } from 'components/LoginForm';
import * as S from './Login.styled';

const Login: React.FC = () => (
  <S.Section>
    <S.Title>Register form</S.Title>
    <S.Text>Welcome!</S.Text>
    <LoginForm />
  </S.Section>
);

export default Login;
