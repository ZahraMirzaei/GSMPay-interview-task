"use client";
import React, { Ref, useState, ChangeEvent } from "react";

interface ITextInputProps {
  inputValue: string;
  handlerInputChange:(event: React.ChangeEvent<HTMLInputElement>) => void;
  placeHolder: string;
  isInputValid: boolean;
  errorMessage?: string;
}

export const TextInput: React.FC<ITextInputProps> = ({
  inputValue,
  handlerInputChange,
  placeHolder,
  isInputValid,
  errorMessage,
  ...rest
}) => {
  return (
    <div className='flex-[3] gap-y-1 min-w-48'>
      <input
        className='w-full p-3 border border-black/20 rounded-lg text-right focus:shadow-lg '
        type='text'
        value={inputValue}
        placeholder={placeHolder}
        onChange={handlerInputChange}
        {...rest}
      />
      <br />
      {!isInputValid ? (
        <span className='text-red-500 absolute font-bold text-sm'>{ errorMessage }</span>
      ) : null}
    </div>
  );
};
