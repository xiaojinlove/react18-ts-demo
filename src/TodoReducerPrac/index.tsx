import React, { FC } from 'react'

import List from './List'
import InputForm from './InputForm'

const TodoList: FC = () => {
  return (
    <div>
      <List />
      <InputForm />
    </div>
  )
}

export default TodoList
