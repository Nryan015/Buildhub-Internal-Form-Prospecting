import React from "react";
import "../styles/styles.css";

function TextInput(props) {
  const { labelText, value, onInputChange } = props;
  return (
    <div>
      <label className="form-track__label">{labelText}</label>
      <input
        type="text"
        className="form-track__input required"
        value={value}
        onChange={(e) => onInputChange(e.target.value)}
      />
    </div>
  );
}

export default TextInput;
