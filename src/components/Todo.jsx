import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleTodo, deleteTodo } from '../redux/actions/todos'

export default function Todo({ id, name, completed }) {
  const dispatch = useDispatch()
  return (
    <>
      <div className="todo">
        {name.toUpperCase()} - {completed ? 'Completed' : 'Pending'}
      </div>
      <label className="complete" onClick={() => dispatch(toggleTodo(id))}>
        Toggle
      </label>
      <label className="delete" onClick={() => dispatch(deleteTodo(id))}>
        Delete
      </label>
    </>
  )
}
