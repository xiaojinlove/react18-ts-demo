import React, { FC, useState, ChangeEvent } from 'react'

const FormElemsDemo: FC = () => {
  const [gender, setGender] = useState('male')
  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setGender(event.target.value)
  }
  return (
    <>
      <p>form elems demo</p>
      <div>
        <label htmlFor="radio1">男</label>
        <input
          type="radio"
          id="radio1"
          name="gender"
          value="male"
          checked={gender === 'male'}
          onChange={handleChange}
        />
        <label htmlFor="radio2">女</label>
        <input
          type="radio"
          id="radio2"
          name="gender"
          value="female"
          checked={gender === 'female'}
          onChange={handleChange}
        />
        <button onClick={() => console.log(gender)}>print</button>
      </div>
    </>
  )
}

export default FormElemsDemo
