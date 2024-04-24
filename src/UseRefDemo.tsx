import React, { FC, useRef } from 'react'

// const UseRefDemo: FC = () => {
//   const inputRef = useRef<HTMLInputElement>(null)
//   const selectInput = () => {
//     const inputElem = inputRef.current
//     console.log(inputElem)
//     if (inputElem) inputElem.select()
//   }
//   return (
//     <div>
//       <input ref={inputRef} defaultValue="jam" />
//       <button onClick={selectInput}>选中 input</button>
//     </div>
//   )
// }

const UseRefDemo: FC = () => {
  const nameRef = useRef('jam')
  const changeName = () => {
    nameRef.current = 'lily'
    console.log(nameRef)
  }
  return (
    <div>
      <p>name {nameRef.current}</p>
      <div>
        <button onClick={changeName}>change name</button>
      </div>
    </div>
  )
}

export default UseRefDemo
