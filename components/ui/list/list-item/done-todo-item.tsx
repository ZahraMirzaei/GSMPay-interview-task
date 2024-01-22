import React from "react";
import { Checkbox } from "@/components/ui/inputs";
import { useTodoStore } from "@/store/todo-store";
import type { ITodo } from "@/type/todo";

interface IDoneTodoItemProps {
  todo: ITodo;
}

export const DoneTodoItem: React.FC<IDoneTodoItemProps> = ({
  todo,
}) => {
  const toggleTodo = useTodoStore((state) => state.toggleTodo);
  return (
    <>
      <Checkbox task={todo} handleChange={() => toggleTodo(todo.id)} />
    </>
  );
};
