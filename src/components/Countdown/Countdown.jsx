import React, { useState } from "react";
import "./Countdown.css";

const Countdown = () => {
  return (
    <div>
      <section id="main-countdown">
        <div id="countdown-timer">
          <div className="time-unit">
            <span>Days</span>
          </div>
          <div className="time-unit">
            <span>Hours</span>
          </div>
          <div className="time-unit">
            <span>Minutes</span>
          </div>
          <div className="time-unit">
            <span>Seconds</span>
          </div>
        </div>
        <section id="us-timezones">
          <h2 className="timezone_title">Pick a Time ⏰ Zone:</h2>
          <div className="timezone-clocks">
            <button>Pacific Time 🌊</button>
            <button>Mountain Time ⛰️</button>
            <button>Central Time 🛣️</button>
            <button>Eastern Time 🗽</button>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Countdown;
