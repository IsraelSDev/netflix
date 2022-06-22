import Input from './input-form';
import Button from './button';
import Link from 'next/link'
import Image from 'next/image'
import movieSVG from '/public/assets/movie.svg'
import style from '/styles/form.module.sass';

const LoginForm = ({ type }) => {
  return (
    <div>
      <div className={style.img_movie}>
        <Image src={movieSVG} alt="movie-icon" />
      </div>
      <form method='post' className={style.form}>
        {
          type === 'login' ? (<>
            <h1>Login</h1>
            <Input type="text" placeholder="Username" required="required" />
            <Input type="password" placeholder="Password" required="required" />
            <Button value="Login to your account" />
            <span className={style.span}>
              Don't have an account? <Link href="/register"><a>Sign Up</a></Link>
            </span>
          </>) : null ||

            type === 'register' ? (<>
              <h1>Sign Up</h1>
              <Input type="email" placeholder="Email Adress" required="required" />
              <Input type="password" placeholder="Password" required="required" />
              <Input type="password" placeholder="Repeat password" required="required" />
              <Button value="Create an account" />
              <span className={style.span}>
                Already have an account? <Link href="/"><a>Login</a></Link>
              </span>
            </>) : null
        }

      </form>
    </div>
  );
}

export default LoginForm;
