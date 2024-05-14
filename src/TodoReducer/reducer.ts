import type { TodoType } from './store'

export type ActionType = {
  type: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload?: any //附加的内容（ 要新增的todo， 要删除的todoId ）
}

export default function reducer(state: TodoType[], action: ActionType) {
  switch (action.type) {
    case 'add':
      return state.concat(action.payload)
    case 'delete':
      return state.filter(todo => todo.id !== action.payload)
    default:
      throw new Error()
  }
}
