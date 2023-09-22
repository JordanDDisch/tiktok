import { useState, useEffect, useContext } from "react";
import TimeContext from "src/providers/TimeProvider/contexts/TimeContext";

export const useAnalogueClock = () => {
  const { hours, minutes, seconds } = useContext(TimeContext);

  const initialSecondsRotation = seconds * 6;
  const initialMinutesRotation = minutes * 6 + seconds * 0.1;
  const initialHoursRotation = hours * 30 + minutes * 0.5;

  const [rotation, setRotation] = useState({
    hours: initialHoursRotation,
    minutes: initialMinutesRotation,
    seconds: initialSecondsRotation
  });

  useEffect(() => {
    const newSecondsRotation = rotation.seconds + 6;  // 6 degrees for every second
    const newMinutesRotation = rotation.minutes + 0.1;  // 0.1 degree for every second
    const newHoursRotation = rotation.hours + 0.00833;  // 0.00833 degree for every second

    setRotation({
      hours: newHoursRotation,
      minutes: newMinutesRotation,
      seconds: newSecondsRotation
    });
  }, [seconds]);

  return rotation;
}