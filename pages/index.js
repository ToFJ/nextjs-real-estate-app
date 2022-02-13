import Head from "next/head";
import Hero from "../components/Hero";
import { useContext, useState } from "react";
import Link from "next/link";
import AppContext from "../context/context";

import startStyles from "../styles/Start.module.css";
import { FcSearch } from "react-icons/fc";

export default function Home() {
  const { fetchData } = useContext(AppContext);

  return (
    <div>
      <Head>
        <title>Next Real Estate App</title>
        <meta name="description" content="Real Estate App with Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <div className={startStyles.content}>
        <div>
          <h1>Finding the key to your new home.</h1>
          <p>Discover real estate for sale and rent in any city you want.</p>
          <div className={startStyles.search}>
            <label htmlFor="search">
              <FcSearch />
            </label>
            <input type="text" name="search" placeholder="Your desired City" />
            <button>
              <Link onClick={fetchData} href="/list">
                Search
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
