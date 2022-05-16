import React, { useState } from "react";
import "./compteurs.css";

const Compteurs = () => {
  const [compteur1, setCompteur1] = useState(0);
  const [compteur2, setCompteur2] = useState(0);

  return (
    <div className="compteursContainer">
      <div className="compteurBox">
        {compteur1 <= 10 && compteur1 + compteur2 < 19 ? (
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

      <div className="compteurBox">
        {compteur2 <= 10 && compteur1 + compteur2 < 19 ? (
          <button
            onClick={() => {
              setCompteur2(compteur2 + 1);
            }}
          >
            +
          </button>
        ) : null}

        <div>{compteur2}</div>
        {compteur2 >= 0 ? (
          <button
            onClick={() => {
              setCompteur2(compteur2 - 1);
            }}
          >
            -
          </button>
        ) : null}
      </div>
      <div>SOMME TOTALE EST {compteur1 + compteur2} </div>
    </div>
  );
};
export default Compteurs;
