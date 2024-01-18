import React from "react";
import { CheckedIcon } from "@/components/ui/icons";
import type { ITodo } from "@/type/todo";

interface CheckboxProps {
  task: ITodo;
}

export const Checkbox: React.FC<CheckboxProps> = ({ task }) => {
  const { title, isDone } = task;

  return (
    <label className='flex items-center space-x-2 flex-1'>
      <input
        name="todo checkbox"
        type='checkbox'
        className='hidden'
      />
      <span
        className={`w-5 h-5 flex items-center justify-center border-2 rounded-full cursor-pointer ${
          isDone ? "bg-current border-black" : "border-gray-400"
        }`}
      >
        {isDone && <CheckedIcon className='w-4 h-4 text-white' />}
      </span>
      <span
        className={`${
          isDone
            ? "line-through text-black text-opacity-60"
            : "text-black text-opacity-80"
        }`}
      >
        {title}
      </span>
    </label>
  );
};
