import navStyles from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <header>
      <nav className={navStyles.nav}>
        <div className={navStyles.text}>Nest.js Real Estate App</div>
      </nav>
    </header>
  );
};

export default Navbar;
