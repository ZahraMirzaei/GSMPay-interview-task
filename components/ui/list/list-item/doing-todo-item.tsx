import React from "react";
import { OutlineButton } from "@/components/ui/buttons";
import { Checkbox } from "@/components/ui/inputs";
import { DeleteIcon } from "@/components/ui/icons";
import { ITodo } from "@/type/todo";
import { useDoingTodos } from "@/components/doing-todos/use-doing-todos";
import { useTodoStore } from "@/store/todo-store";

interface IDoingTodoItemProps {
  todo: ITodo;
}

export const DoingTodoItem: React.FC<IDoingTodoItemProps> = ({
  todo,
}) => {
  const { deleteTodo } = useDoingTodos();
  const toggleTodo = useTodoStore((state) => state.toggleTodo);
  return (
    <>
      <Checkbox task={todo} handleChange={() => toggleTodo(todo.id)} />
      <OutlineButton onClick={() => deleteTodo(todo.id)}>
        <DeleteIcon />
      </OutlineButton>
    </>
  );
};
