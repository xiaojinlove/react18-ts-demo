import React, { FC, useCallback, useState } from 'react'

const UseCallbackDemo: FC = () => {
  const [text, setText] = useState('hello')
  const fn1 = () => console.log('fn1 text: ', text)
  const fn2 = useCallback(() => {
    console.log('fn2 text: ', text)
  }, [text])
  return (
    <>
      <div>
        <button onClick={fn1}>fn1</button>
        <button onClick={fn2}>fn2</button>
      </div>
      <div>
        <input onChange={e => setText(e.target.value)} value={text}></input>
      </div>
    </>
  )
}

export default UseCallbackDemo
