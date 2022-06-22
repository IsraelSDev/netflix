import style from '/styles/form.module.sass';

const InputForm = ({ type, placeholder, required }) => {

  const handleEmpty = (e) => {
    const errorMessage = e.nextElementSibling;
    if (e.value === '') {
      errorMessage.style.opacity = '1';
      e.style.borderBottom = "1px solid var(--color-red)";
    }
    else {
      errorMessage.style.opacity = '0';
      e.style.borderBottom = "1px solid var(--color-white)";
    }
    
  }


  return (<>
    <input required={required ? required : null}
      className={style.input_form}
      type={type ? type : 'text'}
      placeholder={placeholder ? placeholder : 'Email address'}
      onChange={(e) => {
        handleEmpty(e.target)
      }}
    />
    <span id="error-span" className={style.error}>Can't be empty</span>
  </>);
}

export default InputForm;
