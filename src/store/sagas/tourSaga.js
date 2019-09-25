import { put } from 'redux-saga/effects';
import * as actionTypes from '../actions/actionType';
const contentful = require('contentful');

export function* tours(action) {
  try {
    const client = yield contentful.createClient({
      space: 'aa6lmvvj10ja',
      accessToken: 'coEg-s-TeNE4MIZnenmUau8zdPNpZZQc5LqeJ9dW6qU',
    });
    const res = yield client.getEntries({ content_type: 'tour' });

    yield put({
      type: actionTypes.SUCCESS_TOUR,
      payload: res.items,
    });
  } catch (error) {
    yield console.log(error);
  }
}
