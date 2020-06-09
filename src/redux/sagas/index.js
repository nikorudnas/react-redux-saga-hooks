import { all } from 'redux-saga/effects'
import { addTodoSaga, toggleTodoSaga, deleteTodoSaga } from './todos'

export default function* rootSaga() {
  yield all([addTodoSaga(), toggleTodoSaga(), deleteTodoSaga()])
}
