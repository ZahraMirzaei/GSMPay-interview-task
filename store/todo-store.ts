import { create } from 'zustand';
import { v4 as uuidv4 } from 'uuid';
import { ITodo } from '@/type/todo';
import { persist } from 'zustand/middleware'

interface TodoState {
  todosList: ITodo[] | [];
  addTodo: (title: string) => void;
  toggleTodo: (todoId: string) => void;
  deleteTodo: (todoId: string) => void;
}

export const useTodoStore = create<TodoState>()(
  persist(
    (set) => ({
      /* ---------------------------------- State --------------------------------- */
      todosList: [],
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
        set((state) => ({
          todosList: state.todosList.filter((todo) => todo.id !== todoId),
        }));
      }
    }),
    /* -------------------------------------------------------------------------- */
    { name: 'todoStore' }
  )
);

useTodoStore.subscribe
