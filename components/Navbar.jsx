import { useState } from "react";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiFillAlipayCircle } from "react-icons/ai";

import navStyles from "../styles/Navbar.module.css";

const Navbar = () => {
  const [displayMenu, setDisplayMenu] = useState(false);

  return (
    <header>
      <nav className={navStyles.nav}>
        <ul className={displayMenu ? navStyles.open : navStyles.list}>
          <li className={navStyles.logo}>
            <AiFillAlipayCircle />
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
