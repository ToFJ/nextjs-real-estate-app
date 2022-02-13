import Head from "next/head";
import { useContext } from "react";
import AppContext from "../context/context";

import EstateList from "../components/EstateList";

const list = ({ res }) => {
  const { data } = useContext(AppContext);
  console.log(data);
  return (
    <div>
      <Head>
        <title>Next Real Estate About</title>
        <meta name="keywords" content="luxury, high-end, apartments, houses,villa" />
      </Head>
      <EstateList />
    </div>
  );
};

export default list;

export const getStaticProps = async () => {
  const res = await fetch(
    "https://bayut.p.rapidapi.com/auto-complete?query=abu%20dhabi&hitsPerPage=25&page=0&lang=en",
    {
      method: "GET",
      headers: {
        "x-rapidapi-host": "bayut.p.rapidapi.com",
        "x-rapidapi-key": "7764e399d8msh8b52c7ec105f2b2p1ebac6jsnb7eee2d8c420",
      },
    }
  )
    .then(response => {
      console.log(response);
    })
    .catch(err => {
      console.error(err);
    });

  return {
    props: {
      res,
    },
  };
};
