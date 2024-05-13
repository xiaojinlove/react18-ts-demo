import React, { FC, useContext } from 'react'
import { ThemeContext } from './index'

const ThemeButton: FC = () => {
  const theme = useContext(ThemeContext)

  const style = { color: theme.fore, background: theme.background }
  return <button style={style}>ThemeButton</button>
}

export default ThemeButton
