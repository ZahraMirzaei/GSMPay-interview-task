import React from "react";
import { BoxContainer } from "@/components/ui/box-container";
import { TextInput } from "@/components/ui/inputs";
import { Button } from "@/components/ui/buttons";
import { useAddNewTask } from "@/components/add-new-task/use-add-new-task";
import {
  NEW_TASK_TITLE,
  INPUT_PLACEHOLDER,
  INPUT_ERROR_MSG,
  ADD_BUTTON,
} from "@/utils/constant";

export const AddNewTask = () => {
  const { inputValue, isInputValid, handleInputChange, handleFormSubmit } =
    useAddNewTask();

  return (
    <BoxContainer title={NEW_TASK_TITLE} className='order-2 justify-around'>
      <form onSubmit={handleFormSubmit} className='flex flex-wrap gap-5'>
        <TextInput
          placeHolder={INPUT_PLACEHOLDER}
          inputValue={inputValue}
          handlerInputChange={handleInputChange}
          isInputValid={isInputValid}
          errorMessage={INPUT_ERROR_MSG}
        />
        <Button>{ADD_BUTTON}</Button>
      </form>
    </BoxContainer>
  );
};
