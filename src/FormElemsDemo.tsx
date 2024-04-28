import React, { ChangeEvent, FC, useState } from 'react'

const FormElemsDemo: FC = () => {
  const [lang, setLang] = useState('js')
  function handleChange(event: ChangeEvent<HTMLSelectElement>) {
    setLang(event.target.value)
  }
  return (
    <>
      <p>form elems demo</p>
      <div>
        <select value={lang} onChange={handleChange}>
          <option value="java">Java</option>
          <option value="js">JS</option>
          <option value="css">CSS</option>
        </select>
      </div>
    </>
  )
}

export default FormElemsDemo
