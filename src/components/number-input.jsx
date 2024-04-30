import React from "react";
import "../styles/styles.css";

function NumberInput(props) {
  const { labelNumber, value, onInputChange } = props;
  return (
    <div>
      <label className="form-track__label">{labelNumber}</label>
      <input
        type="tel"
        className="form-track__input required"
        value={value}
        onChange={(e) => onInputChange(e.target.value)}
      />
    </div>
  );
}

export default NumberInput;
