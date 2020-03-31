import { action } from 'typesafe-actions';
import { AuthTypes, Auth, AuthForm } from './types';

export const authRequest = (values: AuthForm) =>
  action(AuthTypes.AUTH_REQUEST, values);

export const authSuccess = (data: Auth) =>
  action(AuthTypes.AUTH_SUCCCES, { data });

export const authFailure = () => action(AuthTypes.AUTH_FAILURE);
