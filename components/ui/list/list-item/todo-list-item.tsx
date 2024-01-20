import React from "react";
import { DoingTodoItem } from "@/components/ui/list/list-item/doing-todo-item";
import { DoneTodoItem } from "@/components/ui/list/list-item/done-todo-item";
import { ITodo } from "@/type/todo";

interface ITodoListItemProps {
  todo: ITodo;
}

export const TodoListItem: React.FC<ITodoListItemProps> = ({ todo }) => {
  const TodoItem = todo.isDone ? DoneTodoItem : DoingTodoItem;
  return <TodoItem todo={todo} />;
};
