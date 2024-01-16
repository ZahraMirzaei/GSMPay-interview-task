import { useState, useCallback } from 'react';

export const useInputValidation = () => {
  /* --------------------------------- States --------------------------------- */
  const [inputValue, setInputValue] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');
  /* ----------------------------- Implementation ----------------------------- */
  const validateFarsiInput = useCallback((value: string): void => {
    const pattern = /[^آ-ی۰-۹0-9\s]/g
    const invalidCharacters = value.match(pattern);

    if (invalidCharacters) {
      setErrorMessage("تنها حروف فارسی و اعداد مجاز هستند.");
    } else {
      setErrorMessage('');
      setInputValue(value);
    }
  }, []);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    validateFarsiInput(event.currentTarget.value)
  }
/* -------------------------------------------------------------------------- */
  return { inputValue, errorMessage, handleInputChange };
  /* -------------------------------------------------------------------------- */
};
