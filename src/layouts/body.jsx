import TextInput from "../components/text-input";
import NumberInput from "../components/number-input";
import Dropdown from "../components/dropdown";
import EmailInput from "../components/email-input";
import Attachment from "../components/attachment";
import "../styles/styles.css"


function Body(props){
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
        <form className="form-track">
          <h2 className="form-track__heading heading-2">Prospecting Form (NCR)</h2>
          <div className="form-track__block">  
            <TextInput labelText="Company Name" />
            <TextInput labelText="Contact Name"/>
            <TextInput labelText="Position" />
            <Dropdown labelText="Select City" options={cities} />
            <TextInput labelText="Specific Address" />
            <NumberInput labelNumber="Mobile Number" />
            <NumberInput labelNumber="Telephone No. 1" />
            <NumberInput labelNumber="Telephone No. 2" />
            <TextInput labelText="Supplier" />
            <TextInput labelText="Volume" />
            <Dropdown labelText="Sales Agent" options={agents} />
            <EmailInput labelText="Prospect's Email" />
            <Attachment labelText="Image Upload" />
          </div>
        </form>
      </section>
    </main>
  );
}

export default Body;
