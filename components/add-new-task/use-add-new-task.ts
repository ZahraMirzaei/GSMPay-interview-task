import { useState, useCallback, FormEvent } from 'react';
import { useTodoStore } from "@/store/todo-store";

export const useAddNewTask = () => {
  /* --------------------------------- States --------------------------------- */
  const addTodo = useTodoStore((state) => state.addTodo);
  const [inputValue, setInputValue] = useState<string>('');
  const [isInputValid, setIsInputValid] = useState<boolean>(true);
  /* ----------------------------- Methods ----------------------------- */
  const validateFarsiInput = useCallback((value: string): void => {
    const pattern = /[^آ-ی۰-۹0-9\s]/g
    const invalidCharacters = value.match(pattern);
    if (invalidCharacters) {
      setIsInputValid(false);
    } else {
      setIsInputValid(true);
      setInputValue(value);
    }
  }, []);
  /* -------------------------------------------------------------------------- */
  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (inputValue.trim() && isInputValid) {
      addTodo(inputValue);
      setInputValue("")
    } else if (!inputValue.trim()) {
      setIsInputValid(false)
    }
  }
  /* -------------------------------------------------------------------------- */
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    validateFarsiInput(event.currentTarget.value)
  }
  /* -------------------------------------------------------------------------- */
  return { inputValue, setInputValue, isInputValid, handleInputChange, handleFormSubmit };
  /* -------------------------------------------------------------------------- */
};
