import React from 'react'
import AddTodo from './components/AddTodo'
import ListTodos from './components/ListTodos'

import Dogs from './components/DogPic'

export default function App() {
  return (
    <div className="todo-app">
      <h1>Todo App</h1>
      <AddTodo />
      <ListTodos />
      <br />
      <hr />
      <Dogs />
    </div>
  )
}
