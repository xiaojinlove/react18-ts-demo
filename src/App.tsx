import React, { ChangeEvent, useState } from 'react'
//import ClosureDemo from './ClosureTrap'
//import useMouse from './hooks/useMouse'
//import useGetInfo from './hooks/useGetInfo'
//import List1 from './List1'
//import List2 from './List2'
//import StyledComponentDemo from './StyledComponentDemo'
//import UseRefDemo from './UseRefDemo'
//import ImmerDemo from './ImmerDemo'
//import UseMemoDemo from './UseMemoDemo'
//import UseCallbackDemo from './UseCallbackDemo'
// import useTitle from './hooks/useTitle'
//import { useTitle } from 'ahooks'

function App() {
  //useTitle('App page 1')
  // const { x, y } = useMouse()
  //const { loading, info } = useGetInfo()
  const [text, setText] = useState<string>('hello')
  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setText(event.target.value)
  }
  return (
    <>
      <p>App page</p>
      <div>
        <input value={text} onChange={handleChange} />
        <button onClick={() => console.log(text)}>打印</button>
        <button onClick={() => setText('jam')}>set</button>
      </div>
      {/* <ClosureDemo /> */}
      {/* <p>{loading ? '加载中...' : info}</p> */}
      {/* <List1 /> */}
      {/* <StateDemo1 /> */}
      {/* <StateDemo2 /> */}
      {/* <List2 /> */}
      {/* <ImmerDemo /> */}
      {/* <UseRefDemo /> */}
      {/* <UseMemoDemo /> */}
      {/* <UseCallbackDemo /> */}
      {/* <StyledComponentDemo /> */}
    </>
  )
}

export default App
