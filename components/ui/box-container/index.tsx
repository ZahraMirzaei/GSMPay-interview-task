import React from "react";

interface IBoxContainer {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export const BoxContainer: React.FC<IBoxContainer> = ({ title, children, className="" }) => {
  return (
    <div className={`container ${className}`}>
      <h2 className='font-bold font-xl mb-3'>{title}</h2>
      {children}
    </div>
  );
};
