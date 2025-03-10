import "./Main.css";

function Main() {
  return (
    <div>
      {" "}
      <section class="main__container">
        <header>
          <h1 class="header__title">Countdown to 2026!</h1>
        </header>

        <main>
          <section id="main-countdown">
            <div id="countdown-timer">
              <div class="time-unit">
                <span id="days">00</span>
                <span>Days&nbsp;</span>
              </div>
              <div class="time-unit">
                <span id="hours">00</span>
                <span>Hours</span>
              </div>
              <div class="time-unit">
                <span id="minutes">00</span>
                <span>Minutes</span>
              </div>
              <div class="time-unit">
                <span id="seconds">00</span>
                <span>Seconds</span>
              </div>
            </div>
          </section>

          <section id="us-timezones">
            <h2 class="timezone_title">Pick a Time ⏰ Zone:</h2>
            <div class="timezone-clocks">
              <button class="clock" data-offset="-8">
                Pacific Time 🌊
              </button>
              <button class="clock" data-offset="-7">
                Mountain Time ⛰️
              </button>
              <button class="clock" data-offset="-6">
                Central Time 🛣️
              </button>
              <button class="clock" data-offset="-5">
                Eastern Time 🗽
              </button>
            </div>
          </section>
        </main>
        <section id="seasonal-decor">
          <div class="decor-items">
            <span class="decor">❄️</span>
            <span class="decor">🕯️</span>
            <span class="decor">🧣</span>
            <span class="decor">☃️</span>
            <span class="decor">✨</span>
            <span class="decor">🛷</span>
          </div>
        </section>
      </section>
    </div>
  );
}

export default Main;
