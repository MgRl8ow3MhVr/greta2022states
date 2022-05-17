import "./index.css";

import { useState } from "react";

const Movers = () => {
  const [distanceX, setDistanceX] = useState(0);
  const [distanceY, setDistanceY] = useState(0);

  return (
    <div className="moversContainer">
      <button
        onClick={() => {
          setDistanceX(distanceX + 10);
        }}
      >
        {">"}
      </button>
      <button
        onClick={() => {
          setDistanceX(distanceX - 10);
        }}
      >
        {"<"}
      </button>

      <button
        onClick={() => {
          setDistanceY(distanceY + 10);
        }}
      >
        {"down"}
      </button>
      <button
        onClick={() => {
          setDistanceY(distanceY - 10);
        }}
      >
        {"up"}
      </button>

      <div
        className="square"
        style={{ transform: `translate(${distanceX}px,${distanceY}px)` }}
      ></div>
    </div>
  );
};

export default Movers;
