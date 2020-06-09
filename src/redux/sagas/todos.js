import { takeEvery } from 'redux-saga/effects'
import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from '../actionTypes'

const delay = ms => new Promise(res => setTimeout(res, ms))

function* addTodoDispatched() {
  yield delay(100)
  console.log(`${ADD_TODO} saga triggered!`)
}

function* toggleTodoDispatched() {
  yield delay(100)
  console.log(`${TOGGLE_TODO} saga triggered!`)
}

function* deleteTodoDispatched() {
  yield delay(100)
  console.log(`${DELETE_TODO} saga triggered!`)
}

export function* addTodoSaga() {
  yield takeEvery(ADD_TODO, addTodoDispatched)
}

export function* toggleTodoSaga() {
  yield takeEvery(TOGGLE_TODO, toggleTodoDispatched)
}

export function* deleteTodoSaga() {
  yield takeEvery(DELETE_TODO, deleteTodoDispatched)
}
