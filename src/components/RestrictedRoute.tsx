import { Navigate } from 'react-router-dom';
import { useAuth } from 'hooks';
import React from 'react';

interface IProps {
  component: React.LazyExoticComponent<React.FC>;
  redirectTo?: string;
}

export const RestrictedRoute: React.FC<IProps> = ({
  component: Component,
  redirectTo = '/',
}) => {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? <Navigate to={redirectTo} /> : <Component />;
};
