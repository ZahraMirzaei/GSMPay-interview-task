"use client";
import React, { FC } from "react";
import { IButtonProps } from "@/app/components/ui/buttons/IButtonProps";

export const OutlineButton: FC<IButtonProps> = ({ onClick, children }) => {
  return (
    <button className='rounded-md border border-black/20 p-1' onClick={onClick}>
      {children}
    </button>
  );
};
