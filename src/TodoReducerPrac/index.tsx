import React, { createContext, FC, useReducer } from 'react'

import List from './List'
import InputForm from './InputForm'
import reducer, { ActionType } from './reducer'
import initialState from './store'

export const TodoContext = createContext({
  state: initialState,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  dispatch: (action: ActionType) => {
    /* 空 */
  },
})

const TodoList: FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      <List />
      <InputForm />
    </TodoContext.Provider>
  )
}

export default TodoList
