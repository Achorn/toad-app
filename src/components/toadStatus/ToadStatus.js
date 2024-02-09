import { useEffect, useState } from "react";
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
  const [width, setWidth] = useState("50%");
  const [backgroundColor, setBackgroundColor] = useState("orange");

  const updateBarPercentage = (barPercentage, stat) => {
    let percentage = this.calculatePercentage(stat);
    barPercentage.style.width = percentage + "%";
    barPercentage.style.backgroundColor = "green";
    barPercentage.style.backgroundColor = this.getBarColor(percentage);
  };
  const calculatePercentage = (stat) => {
    const timeDifferenceMS = Date.now() - stat;
    const timeDifferenceHours = Math.floor(timeDifferenceMS / 3600000);
    if (timeDifferenceHours > 36) return 0;
    return (100 * (36 - timeDifferenceHours)) / 36;
  };
  const getBarColor = (number) => {
    if (number > 75) return "green";
    if (number > 25) return "orange";
    return "red";
  };
  useEffect(() => {}, []);
  // percentage

  // color
  //red blue green
  // width
  return (
    <div id="data-container">
      <div className="data-display">
        <p className="bar-title">{title}</p>
        <div className="bar-container bar-container-full">
          <div
            id={`${title}-percentage`}
            className="bar-percentage"
            style={{ width, background: backgroundColor }}
          ></div>
          <div className="bar-percentage"></div>
        </div>
      </div>
    </div>
  );
};
