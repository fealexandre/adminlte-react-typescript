import { all, takeLatest } from 'redux-saga/effects';

import { UsersTypes } from './users/types';
import { load } from './users/sagas';

import { AuthTypes } from './auth/types';
import { auth } from './auth/sagas';

export default function* rootSaga() {
  return yield all([
    takeLatest(UsersTypes.LOAD_ME, load),
    takeLatest(AuthTypes.AUTH_REQUEST, auth),
  ]);
}
