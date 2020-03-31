import { Reducer } from 'redux';
import { UsersState, UsersTypes, User } from './types';
import { AuthConsts } from '../auth/types';

const INITIAL_STATE: UsersState = {
  me: <User>{},
  error: false,
  loading: false,
};

const reducer: Reducer<UsersState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UsersTypes.LOAD_ME:
      return { ...state, loading: true };
    case UsersTypes.LOAD_ME_SUCCCES:
      return {
        ...state,
        loading: false,
        error: false,
        me: action.payload.data,
      };
    case UsersTypes.LOAD_ME_FAILURE:
      localStorage.removeItem(AuthConsts.AUTH_SESSION);
      return {
        ...state,
        loading: false,
        error: true,
        me: <User>{},
      };
    default:
      return state;
  }
};

export default reducer;
