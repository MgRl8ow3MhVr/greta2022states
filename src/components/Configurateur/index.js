import "./index.css";
import { useState } from "react";

const Configurateur = () => {
  const [choice1, setChoice1] = useState(null);
  const [choice2, setChoice2] = useState(null);

  return (
    <div className="configContainer">
      <h1>TYPE DE VELO</h1>
      <div>
        <div
          onClick={() => {
            setChoice1(500);
          }}
          className={choice1 === 500 ? "selected" : "notselected"}
        >
          Velo ville (500E)
        </div>

        <div
          onClick={() => {
            setChoice1(700);
          }}
          className={choice1 === 700 ? "selected" : "notselected"}
        >
          Velo Montagne (700E)
        </div>
      </div>

      <h1>OPTION DE SELLE</h1>

      <div>
        <div
          onClick={() => {
            setChoice2(20);
          }}
          className={choice2 === 20 ? "selected" : "notselected"}
        >
          Classique (20E)
        </div>

        <div
          onClick={() => {
            setChoice2(80);
          }}
          className={choice2 === 80 ? "selected" : "notselected"}
        >
          Suspension (80E)
        </div>
      </div>

      <div className="total">TOTAL : {choice1 + choice2} </div>
    </div>
  );
};

export default Configurateur;
