import React, { FC, useState } from 'react'
import { produce } from 'immer'

const ImmerDemo: FC = () => {
  // const [userInfo, setUserInfo] = useState({ name: 'jam', age: 18 })
  // function changeAge() {
  //   // setUserInfo({
  //   //   ...userInfo,
  //   //   age: 20,
  //   // })
  //   setUserInfo(
  //     produce(draft => {
  //       draft.age = 20
  //       draft.name = 'lily'
  //     })
  //   )
  // }
  const [list, setList] = useState(['x', 'y'])
  function addItem() {
    // // **不可变数据** - 不去修改 state 的值，而是要传入一个新的值 —— 重要！
    // setList(list.concat('z'))
    // // setList([...list, 'z'])
    setList(
      produce(draft => {
        console.log(draft)
        draft.push('z')
      })
    )
  }
  return (
    <div>
      <h2>state 不可变数据</h2>
      {/* <div>{JSON.stringify(userInfo)}</div>
      <button onClick={changeAge}>改变年龄</button> */}
      <div>{JSON.stringify(list)}</div>
      <button onClick={addItem}>add item</button>
    </div>
  )
}

export default ImmerDemo
