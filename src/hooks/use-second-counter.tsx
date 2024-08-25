import { useEffect, useState } from "react";

export const useSecondCounter = (
  initialSec = 0
): [number, number, (state: number) => void] => {
  const [seconds, setSeconds] = useState(initialSec % 60);
  const [minutes, setMinutes] = useState(Math.floor(initialSec / 60));

  useEffect(() => {
    let myInterval = setInterval(() => {
      if (minutes > 0 || seconds > 0) {
        if (seconds > 0) {
          setSeconds(seconds - 1);
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
      if (minutes === 0 && seconds === 0) {
        clearInterval(myInterval);
      }
    }, 1000);

    return () => {
      clearInterval(myInterval);
    };
  }, [minutes, seconds]);

  const setNewSec = (state: number) => {
    setMinutes(Math.floor(state / 60));
    setSeconds(state % 60);
  };

  return [minutes, seconds, setNewSec];
};
