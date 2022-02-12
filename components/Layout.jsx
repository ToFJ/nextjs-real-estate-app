import Head from "next/head";
import Navbar from "./Navbar";

import layoutStyles from "../styles/Layout.module.css";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className={layoutStyles.container}>
        <main>{children}</main>
      </div>
    </>
  );
};

export default Layout;
