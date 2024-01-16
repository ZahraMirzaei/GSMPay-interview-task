"use client";
import React from "react";
import { useInputValidation } from "@/app/components/ui/inputs/text-input/useInputValidation";

export const TextInput = () => {
  const { inputValue, errorMessage, handleInputChange } = useInputValidation();
  return (
    <div className='flex flex-col gap-y-1 h-20 flex-1'>
      <input
        className='p-4 border border-black/20 rounded-lg text-right'
        type='text'
        value={inputValue}
        placeholder='امروز میخوام...'
        onChange={handleInputChange}
      />
      {errorMessage ? <span className='text-red-500'>{errorMessage}</span> : null}
    </div>
  );
};
