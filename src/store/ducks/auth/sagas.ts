import { call, put, take } from 'redux-saga/effects';
import api from 'src/services/api';
import axios from 'axios';

import { authSuccess, authFailure, authRequest } from './actions';
import { loadMe } from 'src/store/ducks/users/actions';
import { AuthForm, AuthTypes } from './types';

export function* auth({ payload }: ReturnType<typeof authRequest>) {
  try {
    const response = yield call(api.post, '/auth/login', payload);

    axios.defaults.headers.common = {
      Authorization: `bearer ${response.data.accessToken}`,
    };

    yield put(authSuccess(response.data));
    yield put(loadMe());
  } catch (err) {
    yield put(authFailure());
  }
}
