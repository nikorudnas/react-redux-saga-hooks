import { all } from 'redux-saga/effects'
import { addTodoSaga, toggleTodoSaga, deleteTodoSaga } from './todos'
import { getDogsSaga } from './dogs'

export default function* rootSaga() {
  yield all([addTodoSaga(), toggleTodoSaga(), deleteTodoSaga(), getDogsSaga()])
}
