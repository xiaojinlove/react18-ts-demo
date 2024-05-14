import React, { ChangeEvent, FC, useContext, useState } from 'react'
import { nanoid } from 'nanoid'
import { TodoContext } from '.'

const InputForm: FC = () => {
  // const [state, dispatch] = useReducer(reducer, initialState)
  const { state, dispatch } = useContext(TodoContext)

  const [text, setText] = useState('')
  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setText(event.target.value)
  }

  function handleSubmit(event: ChangeEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!text.trim()) return
    const newTodo = {
      id: nanoid(5),
      title: text,
    }
    dispatch({ type: 'add', payload: newTodo })
    setText('')
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>What needs to be done?</label>
      <br />
      <input onChange={handleChange} value={text} />
      <button type="submit">Add #{state.length + 1}</button>
    </form>
  )
}

export default InputForm
