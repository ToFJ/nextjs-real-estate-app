import { useState } from "react";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";

import navStyles from "../styles/Navbar.module.css";

const Navbar = () => {
  const [displayMenu, setDisplayMenu] = useState(true);

  return (
    <header>
      <nav className={navStyles.nav}>
        <ul className={displayMenu ? navStyles.open : navStyles.list}>
          <li>
            <Link href="/">Real Estate</Link>
          </li>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/">About</Link>
          </li>
          <li>
            <Link href="/">How It Works</Link>
          </li>
          <li>
            <Link href="/">Get Started</Link>
          </li>
        </ul>
        <button className={displayMenu ? navStyles.ham : ""} onClick={() => setDisplayMenu(!displayMenu)}>
          <GiHamburgerMenu />
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
