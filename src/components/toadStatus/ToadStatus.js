import { useToadContext } from "../../hooks/useToadContext";
import "./toadStatus.css";

export const ToadStatus = () => {
  const { toad } = useToadContext();
  // const sizing
  return (
    <div id="health-display" className="health-full">
      <h2 id="health-display-title">{toad.name}</h2>

      <StatusBar title="water" />
      <StatusBar title="education" />
    </div>
  );
};

const StatusBar = ({ title, date }) => {
  return (
    <div id="data-container">
      <div className="data-display">
        <p className="bar-title">{title}</p>
        <div className="bar-container bar-container-full">
          {/* <div id="water-percentage" className="bar-percentage"></div> */}
          <div className="bar-percentage"></div>
        </div>
      </div>
    </div>
  );
};
