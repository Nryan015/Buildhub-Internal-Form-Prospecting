import "../styles/styles.css"

function EmailInput(props) {
  const { labelText } = props;
  return (
    <div>
      <label className="form-track__label">{labelText}</label>
      <input type="email" className="form-track__input required" />
    </div>
  );
}

export default EmailInput;
