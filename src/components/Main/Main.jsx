import "./Main.css";
import Countdown from "../Countdown/Countdown";

function Main() {
  return (
    <div>
      <section className="main__container">
        <main>
          <Countdown />
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
