import "regenerator-runtime/runtime";
import { call, put, select, takeLatest } from 'redux-saga/effects';
import request from '../utils/request';
import { action_apiCall_Success, action_apiCall_Error } from '../actions';

/**
 * repos request/response handler
 */
export function* getRepos() {
  // Select username from store
  const requestURL = 'http://184.73.67.205:1337/Testflow01s';

  try {
    // Call our request helper (see 'utils/request')
    const repos = yield call(request, requestURL);
    yield put(action_apiCall_Success(repos));
  } catch (err) {
    yield put(action_apiCall_Error(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* getBlockData() {
  yield takeLatest('ACTION_API_CALL', getRepos);
}