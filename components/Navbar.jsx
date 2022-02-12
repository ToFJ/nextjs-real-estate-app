import { useState } from "react";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";

import navStyles from "../styles/Navbar.module.css";

const Navbar = () => {
  const [displayMenu, setDisplayMenu] = useState(false);

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
          <li>How It Works</li>
          <li>Get Started</li>
        </ul>
        <button className={displayMenu ? navStyles.ham : ""} onClick={() => setDisplayMenu(!displayMenu)}>
          <GiHamburgerMenu />
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
