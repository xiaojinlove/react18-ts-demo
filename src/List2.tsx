import React, { FC, useState } from 'react'
import QuestionCard from './components/QuestionCard'
import { produce } from 'immer'

const List2: FC = () => {
  const [questionList, setQuestionList] = useState([
    { id: 'q1', title: '问卷1', isPublished: false },
    { id: 'q2', title: '问卷2', isPublished: false },
    { id: 'q3', title: '问卷3', isPublished: false },
    { id: 'q4', title: '问卷4', isPublished: true },
  ])

  const add = () => {
    const r = Math.random().toString().slice(-3)
    // setQuestionList(
    //   questionList.concat({
    //     id: 'q' + r,
    //     title: '问卷' + r,
    //     isPublished: true,
    //   })
    // )
    setQuestionList(
      produce(draft => {
        draft.push({
          id: 'q' + r,
          title: '问卷' + r,
          isPublished: true,
        })
      })
    )
  }
  function del(id: string) {
    // setQuestionList(
    //   questionList.filter(item => {
    //     if (item.id !== id) return true
    //     else return false
    //   })
    // )
    setQuestionList(
      produce(draft => {
        const index = draft.findIndex(q => q.id === id)
        draft.splice(index, 1)
      })
    )
  }
  function publish(id: string) {
    // setQuestionList(
    //   questionList.map(item => {
    //     if (item.id !== id) {
    //       return item
    //     } else {
    //       return {
    //         ...item,
    //         isPublished: true,
    //       }
    //     }
    //   })
    // )
    setQuestionList(
      produce(draft => {
        const q = draft.find(item => item.id === id)
        if (q) q.isPublished = true
      })
    )
  }
  return (
    <div>
      <h1>问卷调查2</h1>
      <div>
        {questionList.map(question => {
          const { id, title, isPublished } = question
          return (
            <QuestionCard
              key={id}
              id={id}
              title={title}
              isPublished={isPublished}
              deleteQuestion={del}
              publishQuestion={publish}
            />
          )
        })}
      </div>
      <button onClick={add}>编辑问卷</button>
    </div>
  )
}

export default List2
