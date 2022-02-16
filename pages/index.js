import Head from "next/head";
import { useContext, useState } from "react";
import AppContext from "../context/context";
import axios from "axios";

import startStyles from "../styles/Start.module.css";
import { FcSearch } from "react-icons/fc";

import Hero from "../components/Hero";
import PropertyList from "../components/PropertyList";

export default function Home() {
  const { query, setQuery } = useContext(AppContext);
  const [locations, setLocations] = useState([]);

  const fetchData = searchQuery => {
    const options = {
      method: "GET",
      url: "https://bayut.p.rapidapi.com/auto-complete",
      params: { query: searchQuery, hitsPerPage: "25", page: "0", lang: "en" },
      headers: {
        "x-rapidapi-host": "bayut.p.rapidapi.com",
        "x-rapidapi-key": `${process.env.NEXT_PUBLIC_API_KEY}`,
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data.hits);
        locs(response.data.hits);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  const locs = array => {
    const mapped = array.map(item => {
      const newState = item.externalID.toString();
      return newState;
    });
    const newM = mapped.join(",");
    setLocations(newM);
  };

  console.log(locations);

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
            <form>
              <label htmlFor="search">
                <FcSearch />
              </label>
              <input
                value={query}
                onChange={e => setQuery(e.target.value)}
                type="text"
                name="search"
                placeholder="Your desired City"
              />
            </form>
            <button onClick={() => fetchData(query)} type="submit">
              Search
            </button>
          </div>
        </div>
      </div>
      {locations.length > 0 && <PropertyList locations={locations} />}
    </div>
  );
}
