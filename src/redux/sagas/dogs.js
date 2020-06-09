import { takeLatest, put } from 'redux-saga/effects'
import { GET_DOG_START, GET_DOG_FAILURE, GET_DOG_SUCCESS } from '../actionTypes'

function* getDogsDispatched() {
  try {
    const json = yield fetch(
      'https://dog.ceo/api/breeds/image/random'
    ).then(response => response.json())

    if (json.status !== 'success') {
      throw new Error('Failed to fetch!')
    }

    yield put({ type: GET_DOG_SUCCESS, payload: json.message })
  } catch (e) {
    console.error(e)
    yield put({ type: GET_DOG_FAILURE })
  }
}

export function* getDogsSaga() {
  yield takeLatest(GET_DOG_START, getDogsDispatched)
}
