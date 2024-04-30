import React, { useState } from "react";
import TextInput from "../components/text-input";
import NumberInput from "../components/number-input";
import Dropdown from "../components/dropdown";
import EmailInput from "../components/email-input";
import Attachment from "../components/attachment";
import "../styles/styles.css"


function Body(){
  const [formData, setFormData] = useState({
    companyName: "",
    contactName: "",
    position: "",
    city: "",
    specificAddress: "",
    mobileNumber: "",
    telephone1: "",
    telephone2: "",
    supplier: "",
    volume: "",
    salesAgent: "",
    prospectEmail: "",
    image: null,
  });

  const handleInputChange = (fieldName, value) => {
    setFormData({
      ...formData,
      [fieldName]: value,
    });
  };

  const handleImageUpload = (imageFile) => {
    setFormData({
      ...formData,
      image: imageFile,
    });
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
    

  const cities = [
    "Caloocan", "Las Piñas", "Makati", "Malabon", "Mandaluyong", "Manila", "Marikina", "Muntinlupa", "Navotas",
    "Parañaque", "Pasay", "Pasig", "Pateros", "Quezon City", "San Juan", "Taguig", "Valenzuela",
  ];

  const agents = [
    "Nones, Sarah", 
    "Tiamzon, Rose Ann",
    "Custodio, Ed Van Derrick",
  ];
  
  return (
    <main className="container">
      <section className="form-box form-box--transparent">
        <form className="form-track" /*onSubmit={handleSubmit}*/>
          <h2 className="form-track__heading heading-2">Prospecting Form (NCR)</h2>
          <div className="form-track__block">  
            <TextInput 
              labelText="Company Name" 
              value={formData.companyName}
              onInputChange={(value) => handleInputChange("companyName", value)}
            />

            <TextInput 
              labelText="Contact Name"
              value={formData.contactName}
              onInputChange={(value) => handleInputChange("contactName", value)}
            />

            <TextInput 
              labelText="Position" 
              value={formData.position}
              onInputChange={(value) => handleInputChange("position", value)}
            />

            <Dropdown 
              labelText="Select City" options={cities} 
              value={formData.city}
              onInputChange={(value) => handleInputChange("city", value)}
            />

            <TextInput 
              labelText="Specific Address" 
              value={formData.specificAddress}
              onInputChange={(value) => handleInputChange("specificAddress", value)}
            />

            <NumberInput 
              labelNumber="Mobile Number" 
              value={formData.mobileNumber}
              onInputChange={(value) => handleInputChange("mobileNumber", value)}
            />

            <NumberInput 
              labelNumber="Telephone No. 1" 
              value={formData.telephone1}
              onInputChange={(value) => handleInputChange("telephone1", value)} 
            />

            <NumberInput 
              labelNumber="Telephone No. 2" 
              value={formData.telephone2}
              onInputChange={(value) => handleInputChange("telephone2", value)}
            />

            <TextInput 
              labelText="Supplier"
              value={formData.supplier}
              onInputChange={(value) => handleInputChange("supplier", value)}
            />

            <TextInput 
              labelText="Volume" 
              value={formData.volume}
              onInputChange={(value) => handleInputChange("volume", value)}
            />

            <Dropdown 
              labelText="Sales Agent" options={agents} 
              value={formData.salesAgent}
              onInputChange={(value) => handleInputChange("salesAgent", value)}
            />

            <EmailInput 
              labelText="Prospect's Email" 
              labelNumber="Mobile Number" 
              value={formData.prospectEmail}
              onInputChange={(value) => handleInputChange("prospectEmail", value)}
            />

            <Attachment 
              labelText="Image Upload" 
              onImageUpload={(imageFile) => handleImageUpload(imageFile)}
            />
            <button type="submit" className="button">Submit</button>
          </div>
        </form>
      </section>
    </main>
  );
}

export default Body;
