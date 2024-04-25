import React, { FC } from 'react'
import styled, { css } from 'styled-components'

// type ButtonPropsType = {
//   primary?: boolean
// }
// const name = 'jam'
// const hello = `hello ${name}`
//BUtton组件
const Button = styled.button<{ $primary?: boolean }>`
  background: transparent;
  border-radius: 3px;
  border: 2px solid #bf4f74;
  color: #bf4f74;
  margin: 0.5em 1em;
  padding: 0.25em 1em;

  ${props =>
    props.$primary &&
    css`
      background: '#bf4f74';
      color: white;
    `}
`
const Container = styled.div`
  text-align: center;
`

const StyledComponentDemo: FC = () => {
  return (
    <div>
      <p>styled-components demo</p>
      <Container>
        <Button>Normal Button</Button>
        <Button $primary>Primary Button</Button>
      </Container>
    </div>
  )
}

export default StyledComponentDemo
