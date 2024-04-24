import { useState, useEffect } from 'react'

//获取鼠标位置
function useMouse() {
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)

  const handleMousemove = (event: MouseEvent) => {
    setX(event.clientX)
    setY(event.clientY)
  }
  useEffect(() => {
    //监听鼠标事件
    window.addEventListener('mousemove', handleMousemove)

    //组件销毁时， 一定要解绑 DOM 事件！可能会出现组件内存泄漏问题
    return () => {
      window.removeEventListener('mousemove', handleMousemove)
    }
  }, [])
  return { x, y }
}

export default useMouse
