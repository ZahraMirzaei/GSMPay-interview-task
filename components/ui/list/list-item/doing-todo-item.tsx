import React from "react";
import { OutlineButton } from "@/components/ui/buttons";
import { Checkbox } from "@/components/ui/inputs";
import { DeleteIcon } from "@/components/ui/icons";
import { ITodo } from "@/type/todo";
import { useDoingTodos } from "@/components/doing-todos/use-doing-todos";
import { UndoTodo } from "@/components/ui/list/list-item/undo-todo";
/* -------------------------------- Interface ------------------------------- */
interface IDoingTodoItemProps {
  todo: ITodo;
}
/* ----------------------------- Implementation ----------------------------- */
export const DoingTodoItem: React.FC<IDoingTodoItemProps> = ({ todo }) => {
  const { isDeleteClicked, handleDelete, toggleTodo, handleUndoDelete } = useDoingTodos();
  return (
    <>
      {isDeleteClicked ? (
        <UndoTodo todo={todo} handleUndo={handleUndoDelete}/>
      ) : (
        <>
          <Checkbox task={todo} handleChange={() => toggleTodo(todo.id)} />
          <OutlineButton onClick={() => handleDelete(todo.id)}>
            <DeleteIcon />
          </OutlineButton>
        </>
      )}
    </>
  );
};
