import { takeEvery } from 'redux-saga/effects'
import { ADD_TODO } from '../actionTypes'

const delay = ms => new Promise(res => setTimeout(res, ms))

function* sayHello() {
  yield delay(3000)
  console.log('Saga side-effect triggered!')
}

export function* todoSaga() {
  yield takeEvery(ADD_TODO, sayHello)
}
