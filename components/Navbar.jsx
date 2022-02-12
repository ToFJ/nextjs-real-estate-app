import navStyles from "../styles/Navbar.module.css";
import Link from "next/link";

const Navbar = () => {
  return (
    <header>
      <nav className={navStyles.nav}>
        <ul className={navStyles.list}>
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
      </nav>
    </header>
  );
};

export default Navbar;
