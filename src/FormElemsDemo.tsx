import React, { FC, useState, ChangeEvent } from 'react'

const FormElemsDemo: FC = () => {
  const [text, setText] = useState<string>('hello')
  function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    setText(event.target.value)
  }
  function genHtml() {
    return { __html: text.replaceAll('\n', '<br>') }
  }
  return (
    <>
      <p>form elems demo</p>
      <div>
        {/* <input value={text} onChange={handleChange} /> */}
        <textarea value={text} onChange={handleChange}></textarea>
        {/* {text.replaceAll('\n', '<br>')} */}
        <p dangerouslySetInnerHTML={genHtml()}></p>
      </div>
    </>
  )
}

export default FormElemsDemo
