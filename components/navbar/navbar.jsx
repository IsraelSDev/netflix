import style from "/styles/navbar.module.sass";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <div>
      <nav className={style.navbar}>
        <div className={style.navbar__logo}>
          <Link href="/">
            <a>
              <Image layout="fill" src="/images/logo.png" alt="logo" />
            </a>
          </Link>
        </div>

        <div className={style.navbar__menu}>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
