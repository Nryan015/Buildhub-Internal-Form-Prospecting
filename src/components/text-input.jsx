import "../styles/styles.css"

function TextInput(props) {
  const { labelText } = props;
  return (
    <div>
      <label className="form-track__label">{labelText}</label>
      <input type="text" className="form-track__input required" />
    </div>
  );
}

export default TextInput;
