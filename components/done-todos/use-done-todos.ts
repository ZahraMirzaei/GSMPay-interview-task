import { useTodoStore } from '@/store/todo-store';

export const useDoneTodos = () => {
  /* --------------------------------- States --------------------------------- */
  const doneList = useTodoStore(state => state.todosList).filter(todo => todo.isDone)
/* --------------------------------- Returns -------------------------------- */
  return { doneList }
  /* -------------------------------------------------------------------------- */
}