import React, { FC, useEffect } from 'react'
import classnames from 'classnames'
import './QuestionCard.css'

type PropsType = {
  id: string
  title: string
  isPublished: boolean
  deleteQuestion?: (id: string) => void
  publishQuestion?: (id: string) => void
}
const QuestionCard: FC<PropsType> = props => {
  const { id, title, isPublished, deleteQuestion, publishQuestion } = props
  const del = (id: string) => {
    deleteQuestion && deleteQuestion(id)
  }
  const publish = (id: string) => {
    publishQuestion && publishQuestion(id)
  }
  useEffect(() => {
    console.log('question card mounted')
    return () => {
      console.log('question card unmounted')
    }
  }, [])

  // let itemclassName = 'list-item'
  // if (isPublished === true) itemclassName += ' published'

  const itemclassName = classnames('list-item', { published: isPublished })

  return (
    <div key={id} className={itemclassName}>
      <strong>{title}</strong>
      &nbsp;
      {/* 条件判断 */}
      {isPublished ? <span style={{ color: 'green' }}>已发布</span> : <span>未发布</span>}
      &nbsp;
      <button
        onClick={() => {
          publish(id)
        }}
      >
        发布问卷
      </button>
      <button
        onClick={() => {
          del(id)
        }}
      >
        删除问卷
      </button>
    </div>
  )
}

export default QuestionCard
