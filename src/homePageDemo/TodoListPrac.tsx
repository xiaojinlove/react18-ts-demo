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

  return (
    <div>
      <List list={list} />
      <InputForm list={list} setList={setList} />
    </div>
  )
}
type ListPropsType = {
  list: TodoType[]
}
const List: FC<ListPropsType> = props => {
  const { list } = props
  return (
    <ul>
      {list.map(item => {
        return <li key={item.id}>{item.title}</li>
      })}
    </ul>
  )
}
type InputFormPropsType = {
  list: TodoType[]
  setList: (list: TodoType[]) => void
}
const InputForm: FC<InputFormPropsType> = props => {
  const { list, setList } = props
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
    <form onSubmit={handleSubmit}>
      <p>What needs to be done?</p>
      <input value={text} onChange={handleChange} />
      <button type="submit">Add #{list.length + 1}</button>
    </form>
  )
}
export default TodoListPrac
