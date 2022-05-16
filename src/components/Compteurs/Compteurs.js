import React, { useState } from "react";
import "./Compteurs.css";

const Compteurs = () => {
  const [compteur1, setCompteur1] = useState(0);

  return (
    <div className="compteursContainer">
      {compteur1 <= 10 ? (
        <button
          onClick={() => {
            setCompteur1(compteur1 + 1);
          }}
        >
          +
        </button>
      ) : null}

      <div>{compteur1}</div>
      {compteur1 >= 0 ? (
        <button
          onClick={() => {
            setCompteur1(compteur1 - 1);
          }}
        >
          -
        </button>
      ) : null}
    </div>
  );
};
export default Compteurs;
