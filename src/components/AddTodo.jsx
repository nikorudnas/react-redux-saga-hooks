import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../redux/actions/todos'

export default function AddTodo() {
  const dispatch = useDispatch()
  let [name, setName] = useState('')

  function submitTodo() {
    dispatch(addTodo(name))
    setName('')
  }

  return (
    <>
      <h4>Add todo:</h4>
      <input type="text" value={name} onChange={e => setName(e.target.value)} />
      <button onClick={() => submitTodo()}>ADD</button>
    </>
  )
}
