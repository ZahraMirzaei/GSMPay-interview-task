import { create } from 'zustand';
import { v4 as uuidv4 } from 'uuid';
import { ITodo } from '@/type/todo';
import { persist } from 'zustand/middleware'

interface ITodoWithTimer { todoId: string; timerId: NodeJS.Timeout }

interface TodoState {
  todosList: ITodo[] | [];
  undoList: ITodoWithTimer[] | [];
  addTodo: (title: string) => void;
  toggleTodo: (todoId: string) => void;
  clearTimer: (todoId: string) => void;
  deleteTodo: (todoId: string) => void;
  setDeletingTodoIdAndTimerId: ({ todoId, timerId }: ITodoWithTimer) => void;
}

export const useTodoStore = create<TodoState>()(
  persist(
    (set, get) => ({
      /* ---------------------------------- State --------------------------------- */
      todosList: [],
      undoList: [],
      /* --------------------------------- Actions -------------------------------- */
      addTodo: (title: string) => {
        const newTodo = { id: uuidv4(), title, isDone: false };
        set(state => ({
          todosList: [...state.todosList, newTodo]
        }));
      },
      /* -------------------------------------------------------------------------- */
      toggleTodo: (todoId: string) => {
        set((state) => ({
          todosList: state.todosList.map((todo) =>
            todo.id === todoId ? { ...todo, isDone: !todo.isDone } : todo
          ),
        }));
      },
      /* -------------------------------------------------------------------------- */
      deleteTodo: (todoId: string) => {
        let newUndoList = get().undoList.filter(item => item.todoId !== todoId);
        set((state) => ({
          todosList: state.todosList.filter((todo) => todo.id !== todoId),
          undoList: newUndoList,
        }))
      },
      /* -------------------------------------------------------------------------- */
      setDeletingTodoIdAndTimerId: ({ todoId, timerId }) => {
        set((state) => ({
          undoList: [...state.undoList, { todoId, timerId }]
        }))
      },
      /* -------------------------------------------------------------------------- */
      clearTimer: (todoId: string) => {
        const deletingTodoInfo = get().undoList.find(item => item.todoId === todoId)

        if (deletingTodoInfo) {
          clearTimeout(deletingTodoInfo.timerId);
          const newUndoList = get().undoList.filter(item => item.todoId !== todoId)
          set(() => ({
            undoList: newUndoList
          }))
        }
      },
    }),
    /* -------------------------------------------------------------------------- */
    { name: 'todoStore' }
  )
);
