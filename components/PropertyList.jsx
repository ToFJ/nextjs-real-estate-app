import { useEffect, useState } from "react";
import axios from "axios";
import styles from "../styles/HouseList.module.css";
import Image from "next/image";
import Link from "next/link";

const HouseList = ({ locations }) => {
  const [data, setData] = useState([]);
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
          "x-rapidapi-key": `${process.env.NEXT_PUBLIC_API_KEY}`,
        },
      };

      axios
        .request(options)
        .then(function (response) {
          console.log(response.data);
          setData(response.data.hits);
        })
        .catch(function (error) {
          console.error(error);
        });
    }
  }, [locations]);

  return (
    <div className={styles.container}>
      {data.map(house => {
        return (
          <div className={styles.list} key={house.id}>
            <div className={styles.content}>
              <Image src={house.coverPhoto.url} height={350} width={599} alt="Property Picture" />
              <p>$ {house.price} / month</p>
              <p>
                {house.title.slice(0, 50)}...
                <span>
                  <button>
                    <Link href="/details/[id]" as={`/details/${house.externalID}`}>
                      Details &rarr;
                    </Link>
                  </button>
                </span>
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default HouseList;
