import React, { ChangeEvent, FC } from 'react'

// {
//   k1: v1,
//   k2: v2,
//   k3: v3
// }
const FormElemsDemo: FC = () => {
  function handleSubmit(event: ChangeEvent<HTMLFormElement>) {
    event.preventDefault() //阻止默认行为
    //JS 自己提交数据
  }
  return (
    <>
      <p>form elems demo</p>
      <div>
        <form action="/api/post" onSubmit={handleSubmit}>
          <input name="k1" value="v1" />
          <br />
          <textarea name="k2" value="v2" />
          <br />
          <input type="hidden" name="k3" value="v3" />
          <button type="submit">提交</button>
        </form>
      </div>
    </>
  )
}

export default FormElemsDemo
