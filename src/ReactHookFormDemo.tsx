import React, { FC } from 'react'
import { useForm } from 'react-hook-form'

const ReactHookFormDemo: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const onSubmit = (data: unknown) => console.log('form data', data)
  return (
    <div>
      <p>React-Hook-Form Demo</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>First name</label>
        <input {...register('firstName', { required: true, maxLength: 20 })} />
        {errors.firstName && <span style={{ color: 'red' }}>firstName 格式不对</span>}
        <br />

        <label>Last name</label>
        <input {...register('lastName', { pattern: /^[A-Za-z]+$/ })} />
        {errors.lastName && <span style={{ color: 'red' }}>lastName 格式不对</span>}
        <br />

        <label>Age</label>
        <input {...register('age', { min: 18, max: 80 })} />
        {errors.age && <span style={{ color: 'red' }}>Age 不合法</span>}
        <br />

        <input type="submit" />
      </form>
    </div>
  )
}

export default ReactHookFormDemo
