import "../styles/styles.css"

function Attachment(props) {
  const { labelText } = props;
  return (
    <>
      <label className="form-track__label">{labelText}</label>
      <input
        type="file"
        className="radio-options-inputs radio-options-inputs-file"
        placeholder={labelText}
      />
    </>
  );
}

export default Attachment;
