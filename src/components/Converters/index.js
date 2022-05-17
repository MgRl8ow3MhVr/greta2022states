import "./index.css";
import { useState } from "react";

const Converters = () => {
  const [input, setInput] = useState("");

  return (
    <div className="convertersContainer">
      Tapez la valeur en euros
      <input
        type="text"
        value={input}
        onChange={(event) => {
          setInput(event.target.value);
        }}
      />
      La valeur en dollars est
    </div>
  );
};

export default Converters;
