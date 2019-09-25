import { put } from 'redux-saga/effects';
import * as actionTypes from '../actions/actionType';
const contentful = require('contentful');

export function* tours(action) {
  try {
    const client = yield contentful.createClient({
      space: 'y9k6wuw3q4rr',
      accessToken: 'uGE9_VltepB1qJrI6jPetEsqh74HYbbP1acEROu34P8',
    });
    const res = yield client.getEntries({ content_type: 'tour' });

    yield put({
      type: actionTypes.SUCCESS_TOUR,
      payload: res.items,
    });
  } catch (error) {
    console.log(error);
  }
}
