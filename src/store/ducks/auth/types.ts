/**
 * Action types
 */
export enum AuthConsts {
  AUTH_SESSION = 'backend_session',
}

export enum AuthTypes {
  AUTH_REQUEST = '@auth/AUTH_REQUEST',
  AUTH_SUCCCES = '@auth/AUTH_SUCCCES',
  AUTH_FAILURE = '@auth/AUTH_FAILURE',
}

/**
 * Data types
 */
export interface Auth {
  accessToken?: string;
  typeToken?: string;
  expiresIn?: number;
}

export interface AuthForm {
  email: string;
  password: string;
}

/**
 * State type
 */
export interface AuthState {
  readonly auth: Auth;
  readonly loading: boolean;
  readonly error: boolean;
}
