import React, { useState } from "react";
import "../styles/styles.css";

function Dropdown(props) {
  const { labelText, options, value, onInputChange } = props;
  const [selectedValue, setSelectedValue] = useState(value);
  const [customValue, setCustomValue] = useState("");

  const handleChange = (e) => {
    const selectedOption = e.target.value;
    if (selectedOption === "others") {
      setSelectedValue("others");
    } else {
      setSelectedValue(selectedOption);
      onInputChange(selectedOption);
    }
  };

  const handleCustomInputChange = (e) => {
    setCustomValue(e.target.value);
    onInputChange(e.target.value);
  };

  return (
    <div>
      <label className="form-track__label">{labelText}</label>
      <select
        className="form-track__input required"
        value={selectedValue}
        onChange={handleChange}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
        <option value="others">Others</option>
      </select>
      {selectedValue === "others" && (
        <input
          type="text"
          value={customValue}
          onChange={handleCustomInputChange}
          placeholder="Enter custom value"
        />
      )}
    </div>
  );
}

export default Dropdown;
