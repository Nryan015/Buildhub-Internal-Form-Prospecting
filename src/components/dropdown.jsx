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
  
  //Handle Submit
  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   try {
  //     const response = await axios.post('http://localhost:3001/submit-form', formData);
  //     console.log(response.data);
  //     // Handle success response
  //   } catch (error) {
  //     console.error('Error:', error);
  //     // Handle error
  //   }
  // };

  return (
    <div>
      <label className="form-track__label">{labelText}</label>
      <select className="form-track__input" value={selectedOption} onChange={handleSelectChange}>
        {options.map((list, index) => (
          <option key={index} value={list}>
            {list}
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
