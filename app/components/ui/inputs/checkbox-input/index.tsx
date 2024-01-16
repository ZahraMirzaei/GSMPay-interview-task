import React from "react";
import CheckboxLogic from "./useCheckbox";
import { CheckedIcon } from "@/app/components/ui/icons";

interface CheckboxProps {
  label: string;
}

export const Checkbox: React.FC<CheckboxProps> = ({ label }) => {
  const { isChecked, toggleCheckbox } = CheckboxLogic();

  return (
    <label className='flex items-center space-x-2 flex-1'>
      <input
        type='checkbox'
        checked={isChecked}
        onChange={toggleCheckbox}
        className='w-6 h-6 opacity-0 absolute'
      />
      <span
        className={`w-5 h-5 flex items-center justify-center border-2 rounded-full cursor-pointer ${
          isChecked ? "bg-current border-black" : "border-gray-400"
        }`}
      >
        {isChecked && (
          <CheckedIcon className='w-4 h-4 text-white'/>
        )}
      </span>
      <span
        className={
          `${isChecked
            ? "line-through text-black text-opacity-60"
            : "text-black text-opacity-80"}`
        }
      >
        {label}
      </span>
    </label>
  );
};
