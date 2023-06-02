import React, { useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useAppDispatch } from 'hooks';
import { clearError } from 'redux/auth/slice';
import { register as registerUser } from 'redux/auth/operations';
import { Loader } from 'components/Loader';
import { useAuth } from 'hooks';
import { validatePattern, errorMessage } from 'constants/';
import * as S from './RegisterForm.styled';

const schema = yup.object().shape({
  name: yup
    .string()
    .trim()
    .min(2)
    .max(255)
    .matches(validatePattern.name, errorMessage.name)
    .required(),
  email: yup
    .string()
    .max(255)
    .matches(validatePattern.email, errorMessage.email)
    .required(),
  password: yup
    .string()
    .max(255)
    .matches(validatePattern.password, errorMessage.password)
    .required(),
});

const initialValues = {
  name: '',
  email: '',
  password: '',
};

type Inputs = {
  name: string;
  email: string;
  password: string;
};

export const RegisterForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: initialValues,
    resolver: yupResolver(schema),
  });
  const dispatch = useAppDispatch();
  const { isLoading, error: authError } = useAuth();

  useEffect(() => {
    if (authError) {
      toast.error(
        'Something went wrong. There may already be a user with this email address.'
      );
      dispatch(clearError());
    }
  }, [authError, dispatch]);

  const onSubmit: SubmitHandler<Inputs> = ({ name, email, password }) => {
    const normalizedName = name.trim();

    dispatch(registerUser({ name: normalizedName, email, password }));
    reset();
  };

  return (
    <S.RegisterForm
      autoComplete="off"
      noValidate
      onSubmit={handleSubmit(data => {
        onSubmit(data);
      })}
    >
      <S.Title>Register</S.Title>

      <S.Label>
        <S.TextLabel>Name</S.TextLabel>
        <S.Input
          {...register('name')}
          type="text"
          placeholder="Your full name"
        />
        {errors.name && <S.ErrorText>{errors.name?.message}</S.ErrorText>}
      </S.Label>

      <S.Label>
        <S.TextLabel>Email</S.TextLabel>
        <S.Input
          {...register('email')}
          type="email"
          placeholder="Your email address"
        />
        {errors.email && <S.ErrorText>{errors.email?.message}</S.ErrorText>}
      </S.Label>

      <S.Label>
        <S.TextLabel>Password</S.TextLabel>
        <S.Input
          {...register('password')}
          type="password"
          placeholder="Your password"
        />
        {errors.password && (
          <S.ErrorText>{errors.password?.message}</S.ErrorText>
        )}
      </S.Label>

      <S.Button type="submit" disabled={isLoading}>
        {isLoading ? <Loader width="15" height="15" color="#fff" /> : 'Sing up'}
      </S.Button>

      <S.Text>
        Already have an account?
        <S.SignInLink to="/login">Sign in</S.SignInLink>
      </S.Text>
    </S.RegisterForm>
  );
};
