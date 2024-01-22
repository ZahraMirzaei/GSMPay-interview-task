import { useState, useEffect } from 'react';

export const useUndoTimer = () => {
  /* --------------------------------- States --------------------------------- */
  const [remainingTime, setReminingTime] = useState(10);
/* -------------------------------------------------------------------------- */
  useEffect(() => {
    const intervalId = setInterval(() => {
      setReminingTime((prevUndoInfo) => {
        if (prevUndoInfo && prevUndoInfo > 0) {
          return prevUndoInfo - 1

        } else {
          clearInterval(intervalId);
          return 0;
        }
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, [remainingTime])
/* --------------------------------- Retures -------------------------------- */
  return { remainingTime }
  /* -------------------------------------------------------------------------- */
}