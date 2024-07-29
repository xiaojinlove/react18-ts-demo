import React, { FC, useState, ChangeEvent, useContext } from 'react'
import { nanoid } from 'nanoid'
import { TodoContext } from './index'

const InputForm: FC = () => {
  // const [state, dispatch] = useReducer(reducer, initialState)
  const context = useContext(TodoContext)
  const { state, dispatch } = context
  const [text, setText] = useState('')
  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setText(event.target.value)
  }

  function handleSubmit(event: ChangeEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!text.trim()) return
    dispatch({ type: 'add', payload: { id: nanoid(5), title: text } })
    setText('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>What needs to be done?</p>
      <input value={text} onChange={handleChange} />
      <button type="submit">Add #{state.length + 1}</button>
    </form>
  )
}
export default InputForm
