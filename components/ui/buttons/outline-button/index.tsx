"use client";
import React, { FC } from "react";
import { IButtonProps } from "@/components/ui/buttons/I-button-props";

export const OutlineButton: FC<IButtonProps> = ({ onClick, children }) => {
  return (
    <button className='rounded-md border border-black/20 p-1' onClick={onClick}>
      {children}
    </button>
  );
};
