import React from 'react'

function App() {
  const questionList = [
    { id: 'q1', title: '问卷1', isPublished: false },
    { id: 'q2', title: '问卷2', isPublished: false },
    { id: 'q3', title: '问卷3', isPublished: false },
    { id: 'q4', title: '问卷4', isPublished: true },
  ]
  function edit(id: string) {
    console.log('edit', id)
  }
  return (
    <div>
      <h1>问卷调查</h1>
      <div>
        {questionList.map(question => {
          const { id, title, isPublished } = question
          return (
            <div key={id}>
              <strong>{title}</strong>
              &nbsp;
              {/* 条件判断 */}
              {isPublished ? <span style={{ color: 'green' }}>已发布</span> : <span>未发布</span>}
              &nbsp;
              <button
                onClick={() => {
                  edit(id)
                }}
              >
                编辑问卷
              </button>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default App
