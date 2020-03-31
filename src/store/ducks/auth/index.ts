import { Reducer } from 'redux';
import { AuthState, AuthTypes, AuthConsts } from './types';

const INITIAL_STATE: AuthState = {
  auth: {},
  error: false,
  loading: false,
};

const reducer: Reducer<AuthState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AuthTypes.AUTH_REQUEST:
      return { ...state, loading: true };
    case AuthTypes.AUTH_SUCCCES:
      localStorage.setItem(
        AuthConsts.AUTH_SESSION,
        JSON.stringify(action.payload.data)
      );
      return {
        ...state,
        loading: false,
        error: false,
        auth: action.payload.data,
      };
    case AuthTypes.AUTH_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
        auth: {},
      };
    default:
      return state;
  }
};

export default reducer;
