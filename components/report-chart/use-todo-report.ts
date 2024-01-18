import { useTodoStore } from "@/store/todo-store";

export const useTodoReport = () => {
  /* ------------------------------ Calculations ------------------------------ */
  const todosList = useTodoStore(state => state.todosList)
  const totalTodos = todosList.length;
  const doneTodos = todosList.filter((todo) => todo.isDone).length;
  const remainingTodos = totalTodos - doneTodos;
  const donePercentage =  Math.round((doneTodos / totalTodos) * 100);
  const remainingPercentage =  Math.round((remainingTodos / totalTodos) * 100);
  /* -------------------------------------------------------------------------- */
  return { totalTodos, doneTodos, donePercentage, remainingPercentage }
}