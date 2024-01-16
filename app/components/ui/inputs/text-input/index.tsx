"use client";
import React from "react";
import { useInputValidation } from "@/app/components/ui/inputs/text-input/useInputValidation";

interface ITextInputProps {
  placeHolder: string;
}

export const TextInput: React.FC<ITextInputProps> = ({
  placeHolder,
  ...rest
}) => {
  const { inputValue, errorMessage, handleInputChange } = useInputValidation();
  return (
    <div className='flex-[3] gap-y-1 min-w-48'>
      <input
        className='w-full p-3 border border-black/20 rounded-lg text-right focus:shadow-lg '
        type='text'
        value={inputValue}
        placeholder={placeHolder}
        onChange={handleInputChange}
        {...rest}
      />
      <br />
      {errorMessage ? (
        <span className='text-red-500'>{errorMessage}</span>
      ) : null}
    </div>
  );
};
