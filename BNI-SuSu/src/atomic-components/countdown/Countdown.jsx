import React, { useEffect, useRef, useState } from "react";
import "./countdow.css";

const Countdowns = () => {
  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerSeconds, setTimerSeconds] = useState("00");

  let interval = useRef();

  const startTimer = () => {
    const countDownDate = new Date("Aug 21, 2024, 00:00:00").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60  * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60  * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (distance % (1000 * 60 * 60 )) / (1000 * 60)
      );
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        // stop timer
        clearInterval(interval);
      } else {
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    };
  });

  return (
    <div className="timer-caontainer">
      <h2 className="">El momento de networking se acerca</h2>
      <div className="timer">
        <section>
          <p>{ timerDays}</p>
          <p>
            <small>Dias</small>
          </p>
        </section>
        <span>:</span>
        <section>
          <p>{timerHours}</p>
          <p>
            <small>Horas</small>
          </p>
        </section>
        <span>:</span>
        <section>
          <p>{timerMinutes}</p>
          <p>
            <small>Minutos</small>
          </p>
        </section>
        <span>:</span>
        <section>
          <p>{timerSeconds}</p>
          <p>
            <small>Segundos</small>
          </p>
        </section>
      </div>
      <h3>Agosto 21, Hotel Bel Air, WTC de la Ciudad de México</h3>
    </div>
  );
};

export default Countdowns;
