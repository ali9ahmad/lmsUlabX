import { useState, useEffect } from 'react';

function CountdownTimer() {
  const [seconds, setSeconds] = useState(60);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds - 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    if (seconds === 0) {
      // Timer has reached 0, do something here
    }
  }, [seconds]);

  return (
    <div>
      <h1>{seconds}</h1>
    </div>
  );
}

export default CountdownTimer;

