"use client";
import React, { FC } from "react";
import { IButtonProps } from "@/components/ui/buttons/I-button-props";

export const Button: FC<IButtonProps> = ({ onClick, children, type }) => {
  return (
    <button
      className='bg-gradient-linear rounded-lg text-white px-7 py-3 shadow-md flex-1'
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};
