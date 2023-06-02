import React from 'react';
import { RegisterForm } from 'components/RegisterForm';
import * as S from './Register.styled';

const Register: React.FC = () => (
  <S.Section>
    <S.Title>Register form</S.Title>
    <S.Text>Welcome!</S.Text>
    <RegisterForm />
  </S.Section>
);

export default Register;
