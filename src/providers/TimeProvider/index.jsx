import React, { useState, useEffect } from 'react';
import TimeContext from './contexts/TimeContext';

export const TimeProvider = ({ children }) => {
  const [timeObj, setTimeObj] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const date = new Date();
      setTimeObj({
        hours: date.getHours() % 12,
        minutes: date.getMinutes(),
        seconds: date.getSeconds()
      });

      if (loading) {
        setLoading(false);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <TimeContext.Provider value={timeObj}>
      {!loading && children}
    </TimeContext.Provider>
  );
};