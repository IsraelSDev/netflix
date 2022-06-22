import style from '/styles/form.module.sass';

const InputForm = ({ type, placeholder, required }) => {

  const handleInvalid = (e) => {
    const errorMessage = e.nextElementSibling;
    if (e.value === '') {
      errorMessage.style.opacity = '1';
      e.style.borderBottom = "1px solid var(--color-red)";
    }
  }

  return (<>
    <input required={required ? required : null}
      className={style.input_form}
      type={type ? type : 'text'}
      placeholder={placeholder ? placeholder : 'Email address'}
      onInvalid={(e) => {
        handleInvalid(e.target)
      }}
    />
    <span id="error-span" className={style.error}>Can't be empty</span>
  </>);
}

export default InputForm;
