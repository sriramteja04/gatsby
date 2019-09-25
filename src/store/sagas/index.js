import { tours } from './tourSaga';
import { takeEvery } from 'redux-saga/effects';
import * as actionType from '../actions/actionType';

export function* tourSagas() {
  yield takeEvery(actionType.SHOW_TOUR, tours);
}
