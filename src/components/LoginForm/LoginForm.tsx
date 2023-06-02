import { useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useAppDispatch } from 'hooks';
import { clearError } from 'redux/auth/slice';
import { logIn } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import { Loader } from 'components/Loader';
import { validatePattern, errorMessage } from 'constants/';
import * as S from './LoginForm.styled';

const schema = yup.object().shape({
  email: yup
    .string()
    .max(255)
    .matches(validatePattern.email, errorMessage.email)
    .required(),
  password: yup.string().min(8).max(255).required(),
});

const initialValues = {
  email: '',
  password: '',
};

type Inputs = {
  email: string;
  password: string;
};

export const LoginForm = () => {
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
        'Something went wrong. Your password or email may have been entered incorrectly.'
      );
      dispatch(clearError());
    }
  }, [authError, dispatch]);

  const onSubmit: SubmitHandler<Inputs> = data => {
    dispatch(logIn(data));
    reset();
  };

  return (
    <S.LoginForm
      autoComplete="off"
      noValidate
      onSubmit={handleSubmit(data => {
        onSubmit(data);
      })}
    >
      <S.Title>Enter your email and password to sign in</S.Title>

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
        {isLoading ? <Loader width="15" height="15" color="#fff" /> : 'Sing in'}
      </S.Button>

      <S.Text>
        Don't have an account?
        <S.SignInLink to="/register">Sign up</S.SignInLink>
      </S.Text>
    </S.LoginForm>
  );
};
