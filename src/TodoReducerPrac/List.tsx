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
