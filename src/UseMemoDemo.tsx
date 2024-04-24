import React, { FC, useMemo, useState } from 'react'

const UseMemoDemo: FC = () => {
  console.log('demo...')
  const [num1, setNum1] = useState(10)
  const [num2, setNum2] = useState(20)
  const [text, setText] = useState('jam')
  const sum = useMemo(() => {
    console.log('gen sum...')
    return num1 + num2
  }, [num1, num2])
  return (
    <>
      <p>{sum}</p>
      <p>
        {num1} <button onClick={() => setNum1(num1 + 1)}>add num1</button>
      </p>
      <p>
        {num2} <button onClick={() => setNum2(num2 + 1)}>add num2</button>
      </p>
      <div>
        <input onChange={e => setText(e.target.value)} value={text}></input>
      </div>
    </>
  )
}

export default UseMemoDemo
