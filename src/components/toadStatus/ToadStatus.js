import { useEffect, useState } from "react";
import { useToadContext } from "../../hooks/useToadContext";
import "./toadStatus.css";

export const ToadStatus = () => {
  const { toad } = useToadContext();
  // const sizing
  return (
    <div id="health-display" className="health-full">
      <h2 id="health-display-title">{toad.name}</h2>

      <StatusBar title="water" date={Date.parse(toad.last_feeding)} />
      <StatusBar title="education" date={Date.parse(toad.last_lesson)} />
    </div>
  );
};

const StatusBar = ({ title, date }) => {
  const [width, setWidth] = useState("0%");
  const [backgroundColor, setBackgroundColor] = useState("red");

  const calculatePercentage = (stat) => {
    console.log("stat");
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
  useEffect(() => {
    console.log("data: ", date);

    const updateBarPercentage = (stat) => {
      let percentage = calculatePercentage(stat);
      setBackgroundColor(getBarColor(percentage));
      setWidth(percentage + "%");
    };

    updateBarPercentage(date);
  }, [date]);

  return (
    <div id="data-container">
      <div className="data-display">
        <p className="bar-title">{title}</p>
        <div className="bar-container bar-container-full">
          <div
            id={`${title}-percentage`}
            className="bar-percentage"
            style={{ width: width, background: backgroundColor }}
          ></div>
          <div className="bar-percentage"></div>
        </div>
      </div>
    </div>
  );
};
