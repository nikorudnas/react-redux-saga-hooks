import React from 'react'
import { useSelector } from 'react-redux'

import Todo from './Todo'

export default function ListTodos() {
  const { todos } = useSelector(state => ({
    ...state,
  }))

  return (
    <>
      <h4>Todos:</h4>
      {todos.map(todo => (
        <Todo key={todo.id} {...todo} />
      ))}
    </>
  )
}
