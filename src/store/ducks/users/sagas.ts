import { call, put } from 'redux-saga/effects';
import api from '../../../services/api';

import { loadMeSuccess, loadMeFailure } from './actions';

export function* load() {
  try {
    const response = yield call(api.post, '/auth/me');
    yield put(loadMeSuccess(response.data));
  } catch (err) {
    yield put(loadMeFailure());
  }
}
