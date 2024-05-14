import React, { FC, createContext, useReducer } from 'react'
import List from './List'
import InputForm from './InputForm'
import reducer, { ActionType } from './reducer'
import initialState from './store'

export const TodoContext = createContext({
  state: initialState,
  dispatch: (action: ActionType) => {
    console.log(action)
  },
})

const Demo: FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      <p>Todo list by useReducer</p>
      <List />
      <InputForm />
    </TodoContext.Provider>
  )
}

export default Demo
