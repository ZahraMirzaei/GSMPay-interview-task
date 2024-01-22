import React from "react";
import type { ITodo } from "@/type/todo";
import { EMPTY_LIST } from "@/utils/constant";
import { TodoListItem } from "@/components/ui/list/list-item/todo-list-item";

interface IListProps {
  todoList: ITodo[] | [];
}

export const List: React.FC<IListProps> = ({ todoList }) => {
  return (
    <ul>
      {todoList.length >= 1 ? (
        todoList.map((task, index) => (
          <li
            className={`flex justify-between items-center py-2 border-b ${
              index === todoList.length - 1 ? "last:border-b-0" : ""
            }`}
            key={task.id}
          >
            <TodoListItem todo={task} />
          </li>
        ))
      ) : (
        <p className='text-gray-500/60'>{EMPTY_LIST}</p>
      )}
    </ul>
  );
};
