import React, { FC, useReducer } from 'react'
import initialState from './store'
import reducer from './reducer'

const List: FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  function del(id: string) {
    dispatch({ type: 'delete', payload: id })
  }

  return (
    <ul>
      {state.map(todo => (
        <li key={todo.id}>
          <span>{todo.title}</span>
          <button onClick={() => del(todo.id)}>删除</button>
        </li>
      ))}
    </ul>
  )
}

export default List
