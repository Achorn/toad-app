import "./toadStatus.css";

export const ToadStatus = () => {
  return (
    <div id="health-display">
      <h2 id="health-display-title">health</h2>
      <div id="data-container"></div>
      <div className="data-display">
        <p className="bar-title">water</p>
        <div className="bar-container">
          <div id="water-percentage" className="bar-percentage"></div>
        </div>
      </div>
      <div id="data-container"></div>
      <div className="data-display">
        <p className="bar-title">education</p>
        <div className="bar-container">
          <div id="education-percentage" className="bar-percentage"></div>
        </div>
      </div>
    </div>
  );
};
