import { useState, useEffect, useContext } from 'react';
import TimeContext from "src/providers/TimeProvider/contexts/TimeContext";

export const useDigitalClock = () => {
  const { hours, minutes, seconds } = useContext(TimeContext);
  const [formattedTime, setFormattedTime] = useState({
    hours: '00',
    minutes: '00',
    seconds: '00'
  });

  useEffect(() => {
    const format = (num) => num < 10 ? `0${num}` : `${num}`;

    setFormattedTime({
      hours: format(hours),
      minutes: format(minutes),
      seconds: format(seconds)
    });
  }, [seconds]);

  return formattedTime;
}
