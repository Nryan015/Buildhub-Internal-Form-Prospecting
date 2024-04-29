import "../styles/styles.css"
import React, { useState } from 'react';

function Dropdown(props) {
  const { labelText, options } = props;
  const [selectedOption, setSelectedOption] = useState('');
  const [otherText, setOtherText] = useState('');

  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);

    // If "Others" is selected, clear the input field
    if (selectedValue !== 'Others') {
      setOtherText('');
    }
  };

  const handleOtherTextChange = (event) => {
    setOtherText(event.target.value);
  };

  return (
    <div>
      <label className="form-track__label">{labelText}</label>
      <select className="form-track__input" value={selectedOption} onChange={handleSelectChange}>
        {options.map((company, index) => (
          <option key={index} value={company}>
            {company}
          </option>
        ))}
        <option value="Others">Others</option>
      </select>
      {selectedOption === 'Others' && (
        <input
          type="text"
          className="form-track__input"
          value={otherText}
          onChange={handleOtherTextChange}
          placeholder="Enter Text"
        />
      )}
    </div>
  );
}

export default Dropdown;
