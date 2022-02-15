import { useEffect } from "react";
import axios from "axios";
import styles from "../styles/HouseList.module.css";

const HouseList = ({ data, locations }) => {
  useEffect(() => {
    if (locations) {
      const options = {
        method: "GET",
        url: "https://bayut.p.rapidapi.com/properties/list",
        params: {
          locationExternalIDs: locations,
          purpose: "for-rent",
          hitsPerPage: "25",
          page: "0",
          lang: "en",
          sort: "city-level-score",
          rentFrequency: "monthly",
          categoryExternalID: "4",
        },
        headers: {
          "x-rapidapi-host": "bayut.p.rapidapi.com",
          "x-rapidapi-key": "7764e399d8msh8b52c7ec105f2b2p1ebac6jsnb7eee2d8c420",
        },
      };

      axios
        .request(options)
        .then(function (response) {
          console.log(response.data);
        })
        .catch(function (error) {
          console.error(error);
        });
    }
  }, [locations]);

  return (
    <div className={styles.container}>
      <div></div>
    </div>
  );
};

export default HouseList;
