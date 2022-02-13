import { useState } from "react";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiFillAlipayCircle } from "react-icons/ai";
import navStyles from "../styles/Navbar.module.css";

const Navbar = () => {
  const [displayMenu, setDisplayMenu] = useState(false);
  const closeOnClick = () => {
    setDisplayMenu(false);
  };

  return (
    <header>
      <nav className={navStyles.nav}>
        <ul className={displayMenu ? navStyles.open : navStyles.list}>
          <li onClick={closeOnClick} className={navStyles.logo}>
            <Link href="/" passHref>
              <AiFillAlipayCircle />
            </Link>
          </li>
          <li onClick={closeOnClick}>
            <Link href="/">Home</Link>
          </li>
          <li onClick={closeOnClick}>
            <Link href="/">About</Link>
          </li>
          <li onClick={closeOnClick}>How It Works</li>
          <li onClick={closeOnClick}>Get Started</li>
        </ul>
        <button
          className={displayMenu ? navStyles.white : navStyles.black}
          onClick={() => setDisplayMenu(!displayMenu)}
        >
          <GiHamburgerMenu />
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
