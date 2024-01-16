import React from "react";

interface IBoxContainer {
  children: React.ReactNode;
}

export const BoxContainer: React.FC<IBoxContainer> = ({ children }) => {
  return <div className='container'>{children}</div>;
};
