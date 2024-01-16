import React from "react";
import { BoxContainer } from "@/app/components/ui/box-container";
import { TextInput } from "@/app/components/ui/inputs";
import { Button } from "@/app/components/ui/buttons";

export const AddNewTask = () => {
  return (
    <BoxContainer title={"افزودن تسک جدید"} className="order-2 justify-around">
      <div className='flex flex-wrap gap-5'>
        <TextInput placeHolder='امروز میخوام...' />
        <Button onClick={() => {}}>افزودن</Button>
      </div>
    </BoxContainer>
  );
};
