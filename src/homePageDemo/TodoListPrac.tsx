import React, { ChangeEvent, FC, useState } from 'react'
import { nanoid } from 'nanoid'

type TodoType = {
  id: string
  title: string
}
const TodoListPrac: FC = () => {
  const initialState = [
    { id: nanoid(5), title: '吃饭' },
    { id: nanoid(5), title: '睡觉' },
  ]
  const [list, setList] = useState<TodoType[]>(initialState)
  const [text, setText] = useState('')
  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setText(event.target.value)
  }
  function handleSubmit(event: ChangeEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!text.trim()) return
    setList(list.concat({ id: nanoid(5), title: text }))
    setText('')
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
        <button type="submit">Add #{list.length + 1}</button>
      </form>
    </div>
  )
}

export default TodoListPrac
