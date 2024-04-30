import React from "react";
import "../styles/styles.css";

function EmailInput(props) {
  const { labelText, value, onInputChange } = props;
  
  const handleChange = (event) => {
    onInputChange(event.target.value);
  };

  return (
    <div>
      <label className="form-track__label">{labelText}</label>
      <input
        type="email"
        className="form-track__input required"
        value={value}
        onChange={handleChange}
      />
    </div>
  );
}

export default EmailInput;
