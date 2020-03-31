/**
 * Action types
 */
export enum UsersTypes {
  LOAD_ME = '@users/LOAD_ME',
  LOAD_ME_SUCCCES = '@users/LOAD_ME_SUCCCES',
  LOAD_ME_FAILURE = '@users/LOAD_ME_FAILURE',
}

/**
 * Data types
 */
export interface User {
  id: number;
  name: string;
  email: string;
  created_at: Date;
  updated_at: Date;
}

/**
 * State type
 */
export interface UsersState {
  readonly me: User;
  readonly loading: boolean;
  readonly error: boolean;
}
