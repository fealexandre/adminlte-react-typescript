import { action } from 'typesafe-actions';
import { UsersTypes, User } from './types';

export const loadMe = () => action(UsersTypes.LOAD_ME);

export const loadMeSuccess = (data: User) =>
  action(UsersTypes.LOAD_ME_SUCCCES, { data });

export const loadMeFailure = () => action(UsersTypes.LOAD_ME_FAILURE);
