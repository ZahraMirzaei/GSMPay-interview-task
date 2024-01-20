import React from "react";
import { CheckedIcon } from "@/components/ui/icons";
import type { ITodo } from "@/type/todo";

interface CheckboxProps {
  task: ITodo;
  handleChange: () => void;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  task,
  handleChange,
  ...props
}) => {
  const { id, title, isDone } = task;

  return (
    <label htmlFor={id} className='flex items-center space-x-2 flex-1'>
      <input
        className='peer appearance-none'
        type='checkbox'
        id={id}
        checked={isDone}
        onChange={handleChange}
        {...props}
      />
      <CheckedIcon className={`rounded-full text-transparent w-5 h-5 peer-checked:text-white border border-black/80 ${isDone ? "bg-black/80": "" }`} />
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

// bg-white
// focus:outline-none focus:ring-offset-0 focus:ring-1 focus:ring-black/10
// checked:bg-black/90 checked:border-0
// disabled: border - steel - 400 disabled: bg - steel - 400
// appearance-none
