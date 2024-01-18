import React from "react";
import { Checkbox } from "@/components/ui/inputs";
import type { ITodo } from "@/type/todo";
import { useTodoStore } from "@/store/todo-store";
import { OutlineButton } from "@/components/ui/buttons";
import { EMPTY_LIST } from "@/utils/constant";

interface IListProps {
  todoList: ITodo[] | [];
  handleDeleteClick?: (todoId: string) => void;
  Icon?: React.ReactNode;
}

export const List: React.FC<IListProps> = ({
  todoList,
  handleDeleteClick,
  Icon,
}) => {
  const toggleTodo = useTodoStore((state) => state.toggleTodo);
  return (
    <ul>
      {todoList.length >= 1 ? (
        todoList.map((task, index) => (
          <li
            className={`flex justify-between items-center py-2 border-b ${
              index === todoList.length - 1 ? "last:border-b-0" : ""
            }`}
            key={task.id}
            onClick={() => toggleTodo(task.id)}
          >
            <Checkbox task={task} />
            {Icon && handleDeleteClick ? (
              <OutlineButton onClick={() => handleDeleteClick(task.id)}>
                {Icon}
              </OutlineButton>
            ) : null}
          </li>
        ))
      ) : (
        <p className='text-gray-500/60'>{EMPTY_LIST}</p>
      )}
    </ul>
  );
};
