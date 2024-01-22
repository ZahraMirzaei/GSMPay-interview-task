import { useState } from 'react';
import { useTodoStore } from '@/store/todo-store';
import { UNDO_COUNTDOWN_MILI_SEC } from '@/utils/constant';

export const useDoingTodos = () => {
  /* ------------------------------ States ------------------------------ */
  const doingList = useTodoStore(state => state.todosList).filter(todo => !todo.isDone);
  const deleteTodo = useTodoStore(state => state.deleteTodo);
  const setDeletingTodoIdAndTimerId = useTodoStore(state => state.setDeletingTodoIdAndTimerId)
  const toggleTodo = useTodoStore(state => state.toggleTodo);
  const clearTimer = useTodoStore(state => state.clearTimer);
  const [isDeleteClicked, setIsDeleteClicked] = useState(false)
  /* ----------------------------- Methods ----------------------------- */
  const handleDelete = (todoId: string) => {
    const timerId = setTimeout(() => {
      deleteTodo(todoId);
    }, UNDO_COUNTDOWN_MILI_SEC);
    setDeletingTodoIdAndTimerId({ todoId, timerId });
    setIsDeleteClicked(true);
  };
  /* -------------------------------------------------------------------------- */
  const handleUndoDelete = (todoId: string) => {
    clearTimer(todoId)
    setIsDeleteClicked(false);
  };
  /* ------------------------------ Returns ------------------------------ */
  return { doingList, handleDelete, toggleTodo, isDeleteClicked, handleUndoDelete };
  /* -------------------------------------------------------------------------- */
}