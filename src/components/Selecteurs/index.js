import { useState } from "react";
import "./index.css";

const Selecteurs = () => {
  const [choice, setChoice] = useState(null);

  return (
    <div className="selContainer">
      <div
        onClick={() => {
          setChoice("square1");
        }}
        className={choice === "square1" ? "selGreen" : "selOrange"}
      ></div>

      <div
        onClick={() => {
          setChoice("square2");
        }}
        className={choice === "square2" ? "selGreen" : "selOrange"}
      ></div>
    </div>
  );
};

export default Selecteurs;
