import "./index.css";

import { useState } from "react";

const Movers = () => {
  const [distanceX, setDistanceX] = useState(0);

  return (
    <div className="moversContainer">
      <button
        onClick={() => {
          console.log("clic");
          setDistanceX(distanceX + 10);
        }}
      >
        {">"}
      </button>
      <div
        className="square"
        style={{ transform: `translate(${distanceX}px,0)` }}
      ></div>
    </div>
  );
};

export default Movers;
