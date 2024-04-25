import React, { FC, useEffect, useState, useRef } from 'react'

const ClosureDemo: FC = () => {
  const [count, setCount] = useState(0)

  const countRef = useRef(0)
  useEffect(() => {
    countRef.current = count
  }, [count])

  function add() {
    setCount(count + 1)
  }

  function alertFn() {
    setTimeout(() => {
      //alert(count)
      alert(countRef.current)
    }, 3000)
  }
  return (
    <>
      <p>闭包陷阱</p>
      <div>
        <span>{count}</span>
        <button onClick={add}>add</button>
        <button onClick={alertFn}>alert</button>
      </div>
    </>
  )
}

export default ClosureDemo
