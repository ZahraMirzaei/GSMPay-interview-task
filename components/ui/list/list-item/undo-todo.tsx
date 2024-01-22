import React from "react";
import { UNDO_TEXT } from "@/utils/constant";
import { formatTime } from "@/utils/format-time";
import { UndoIcon } from "@/components/ui/icons";
import { useUndoTimer } from "@/components/ui/list/list-item/use-undo-timer";
import { ITodo } from "@/type/todo";

/* -------------------------------- Interface ------------------------------- */
interface IUndoTodoProps {
  todo: ITodo;
  handleUndo: (todoId: string) => void;
}
/* ----------------------------- Implementation ----------------------------- */
export const UndoTodo: React.FC<IUndoTodoProps> = ({
  todo,
  handleUndo
}) => {
  const { remainingTime } = useUndoTimer();

  return (
    <div className='flex justify-between items-center flex-1 rounded-lg bg-black/10 py-2 px-4'>
      <span>
        <span>{formatTime(remainingTime)}</span>&nbsp;
        <span>{UNDO_TEXT}</span>
      </span>
      <button
        onClick={() => {
          handleUndo(todo.id);
        }}
      >
        <UndoIcon />
      </button>
    </div>
  );
};
