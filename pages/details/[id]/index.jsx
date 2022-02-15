import React from "react";

const details = ({ data }) => {
  console.log(data);
  return <div>details</div>;
};

export const getServerSideProps = async context => {
  const res = await fetch(`https://bayut.p.rapidapi.com/properties/detail?externalID=${context.params.id}`, {
    headers: {
      "x-rapidapi-host": "bayut.p.rapidapi.com",
      "x-rapidapi-key": "7764e399d8msh8b52c7ec105f2b2p1ebac6jsnb7eee2d8c420",
    },
  });
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};

export default details;
