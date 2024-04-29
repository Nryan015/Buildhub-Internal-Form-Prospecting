import "../styles/styles.css"

function NumberInput(props) {
  const { labelNumber } = props;
  return (
    <div>
      <label className="form-track__label">{labelNumber}</label>
      <input type="tel" className="form-track__input required" />
    </div>
  );
}

export default NumberInput;
