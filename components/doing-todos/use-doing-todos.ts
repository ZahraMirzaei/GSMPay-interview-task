import { useTodoStore } from '@/store/todo-store';

export const useDoingTodos = () => {
  const doingList = useTodoStore(state => state.todosList).filter(todo => !todo.isDone)
  const deleteTodo = useTodoStore(state=>state.deleteTodo)
  
  return {doingList, deleteTodo}
}