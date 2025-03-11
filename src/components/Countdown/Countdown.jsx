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
      </section>
    </div>
  );
};

export default Countdown;
