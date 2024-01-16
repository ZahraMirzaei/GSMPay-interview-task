"use client";
import React, { FC } from "react";
import { IButtonProps } from "@/app/components/ui/buttons/IButtonProps";

export const Button: FC<IButtonProps> = ({ onClick, children }) => {
  return (
    <button
      className='bg-gradient-linear rounded-lg text-white px-7 py-3 shadow-md flex-1'
      onClick={onClick}
    >
      {children}
    </button>
  );
};
