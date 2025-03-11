import "./Main.css";
import Countdown from "../Countdown/Countdown"; // Import the Countdown component

function Main() {
  return (
    <div>
      <section className="main__container">
        <main>
          {/* Replace the countdown section with the Countdown component */}
          <Countdown />

          {/* Seasonal Decor Section (unchanged) */}
          <section id="seasonal-decor">
            <div className="decor-items">
              <span className="decor">❄️</span>
              <span className="decor">🕯️</span>
              <span className="decor">🧣</span>
              <span className="decor">☃️</span>
              <span className="decor">✨</span>
              <span className="decor">🛷</span>
            </div>
          </section>
        </main>
      </section>
    </div>
  );
}

export default Main;
