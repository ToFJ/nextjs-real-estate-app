import Head from "next/head";
import { useContext } from "react";
import AppContext from "../context/context";

import EstateList from "../components/EstateList";

const list = ({ articles }) => {
  console.log(articles);
  //   const { data } = useContext(AppContext);
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

export const getServerSideProps = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const articles = await res.json();
  return {
    props: {
      articles,
    },
  };
};
