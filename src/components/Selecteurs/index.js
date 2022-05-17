import { useState } from "react";
import "./index.css";

console.log("ici");

const Selecteurs = () => {
  const [choice, setChoice] = useState(null);
  const [choice2, setChoice2] = useState(null);

  console.log("Hello");

  return (
    <>
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

        <div
          onClick={() => {
            setChoice("square3");
          }}
          className={choice === "square3" ? "selGreen" : "selOrange"}
        ></div>
      </div>
      <hr />

      <div className="selContainer">
        <div
          onClick={() => {
            setChoice2("im1");
          }}
          className={choice2 === "im1" ? "imgbackground1" : "imgVerso"}
        ></div>
        <div
          onClick={() => {
            setChoice2("im2");
          }}
          className={choice2 === "im2" ? "imgbackground2" : "imgVerso"}
        ></div>
      </div>
    </>
  );
};

export default Selecteurs;
