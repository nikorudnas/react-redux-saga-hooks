import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from '../actionTypes'

let nextTodoId = 0

export const addTodo = name => ({
  type: ADD_TODO,
  payload: { id: nextTodoId++, name },
})

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  payload: { id },
})

export const deleteTodo = id => ({
  type: DELETE_TODO,
  payload: { id },
})
