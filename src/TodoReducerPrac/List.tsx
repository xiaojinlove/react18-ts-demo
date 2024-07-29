import React, { FC, useContext } from 'react'
import { TodoContext } from './index'

const List: FC = () => {
  // const [state, dispatch] = useReducer(reducer, initialState)
  const context = useContext(TodoContext)
  const { state, dispatch } = context

  function del(id: string) {
    dispatch({ type: 'delete', payload: id })
  }
  return (
    <ul>
      {state.map(item => {
        return (
          <li key={item.id}>
            <span>{item.title}</span>
            <button onClick={() => del(item.id)}>删除</button>
          </li>
        )
      })}
    </ul>
  )
}

export default List
