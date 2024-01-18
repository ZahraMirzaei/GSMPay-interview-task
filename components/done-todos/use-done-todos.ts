import { useTodoStore } from '@/store/todo-store';

export const useDoneTodos = () => {
  const doneList = useTodoStore(state => state.todosList).filter(todo => todo.isDone)

  return { doneList }
}