import { useState } from 'react';

interface CheckboxLogicProps {
  initialChecked?: boolean;
}

const CheckboxLogic = ({ initialChecked = false }: CheckboxLogicProps = {}) => {
  const [isChecked, setIsChecked] = useState<boolean>(initialChecked);

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  return {
    isChecked,
    toggleCheckbox,
  };
};

export default CheckboxLogic;
