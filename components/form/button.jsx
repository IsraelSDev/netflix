import style from '/styles/button.module.sass';

const Button = ({ value }) => {
  return (
    <input type='submit' className={style.Button} value={value ? value : "Submit"} />
  );
}

export default Button;
