import React, { useState, useEffect } from "react";
import "./Countdown.css";

const Countdown = () => {
  const [time, setTime] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });
  const [selectedOffset, setSelectedOffset] = useState(-5);

  useEffect(() => {
    const countDownDate = new Date(
      `Jan 1, 2026 00:00:00 GMT${selectedOffset < 0 ? "-" : "+"}${Math.abs(
        selectedOffset
      )
        .toString()
        .padStart(2, "0")}00`
    ).getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTime({
        days: days.toString().padStart(2, "0"),
        hours: hours.toString().padStart(2, "0"),
        minutes: minutes.toString().padStart(2, "0"),
        seconds: seconds.toString().padStart(2, "0"),
      });

      if (distance < 0) clearInterval(interval);
    }, 1000);

    return () => clearInterval(interval);
  }, [selectedOffset]);

  const setTimezone = (offset) => {
    setSelectedOffset(offset);
  };

  return (
    <section id="main-countdown">
      <div id="countdown-timer">
        <div className="time-unit">
          <span id="days">{time.days}</span>
          <span>Days &nbsp;</span>
        </div>
        <div className="time-unit">
          <span id="hours">{time.hours}</span>
          <span>Hours </span>
        </div>
        <div className="time-unit">
          <span id="minutes">{time.minutes}</span>
          <span>Minutes</span>
        </div>
        <div className="time-unit">
          <span id="seconds">{time.seconds}</span>
          <span>Seconds</span>
        </div>
      </div>

      <section id="us-timezones">
        <h2 className="timezone_title">Pick a Time Zone:</h2>
        <div className="timezone-clocks">
          <button
            className={`clock ${selectedOffset === -8 ? "selected" : ""}`}
            onClick={() => setTimezone(-8)}
          >
            Pacific Time 🌊
          </button>
          <button
            className={`clock ${selectedOffset === -7 ? "selected" : ""}`}
            onClick={() => setTimezone(-7)}
          >
            Mountain Time ⛰️
          </button>
          <button
            className={`clock ${selectedOffset === -6 ? "selected" : ""}`}
            onClick={() => setTimezone(-6)}
          >
            Central Time 🛣️
          </button>
          <button
            className={`clock ${selectedOffset === -5 ? "selected" : ""}`}
            onClick={() => setTimezone(-5)}
          >
            Eastern Time 🗽
          </button>
        </div>
      </section>
    </section>
  );
};

export default Countdown;
