import startStyles from "../styles/Start.module.css";
import { FcSearch } from "react-icons/fc";

const Home = () => {
  return (
    <div className={startStyles.content}>
      <div>
        <h1>Finding the key to your new home.</h1>
        <p>Discover real estate for sale and rent.</p>
        <div className={startStyles.search}>
          <label htmlFor="search">
            <FcSearch />
          </label>
          <input type="text" name="search" placeholder="Your desired City" />

          <button>Search</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
