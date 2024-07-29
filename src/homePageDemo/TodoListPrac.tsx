import React, { ChangeEvent, FC, useState } from 'react'
import { nanoid } from 'nanoid'

const TodoListPrac: FC = () => {
  const initialState = [
    { id: nanoid(5), title: '吃饭' },
    { id: nanoid(5), title: '睡觉' },
  ]
  const [list, setList] = useState(initialState)
  const [text, setText] = useState('')
  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setText(event.target.value)
  }
  function handleSubmit(event: ChangeEvent<HTMLFormElement>) {
    event.preventDefault()
    setList(list.concat({ id: nanoid(5), title: text }))
  }
  return (
    <div>
      <ul>
        {list.map(item => {
          return <li key={item.id}>{item.title}</li>
        })}
      </ul>
      <p>What needs to be done?</p>
      <form onSubmit={handleSubmit}>
        <input value={text} onChange={handleChange} />
        <button type="submit">添加todo</button>
      </form>
    </div>
  )
}

export default TodoListPrac
