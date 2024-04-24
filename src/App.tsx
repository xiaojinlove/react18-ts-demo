import React from 'react'
//import List1 from './List1'
//import List2 from './List2'
//import UseRefDemo from './UseRefDemo'
//import ImmerDemo from './ImmerDemo'
//import UseMemoDemo from './UseMemoDemo'
//import UseCallbackDemo from './UseCallbackDemo'
import useTitle from './hooks/useTitle'

function App() {
  useTitle('App page 1')
  return (
    <>
      <p>App page</p>
      {/* <List1 /> */}
      {/* <StateDemo1 /> */}
      {/* <StateDemo2 /> */}
      {/* <List2 /> */}
      {/* <ImmerDemo /> */}
      {/* <UseRefDemo /> */}
      {/* <UseMemoDemo /> */}
      {/* <UseCallbackDemo /> */}
    </>
  )
}

export default App
