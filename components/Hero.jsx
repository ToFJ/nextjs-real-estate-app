import Image from "next/image";
import heroStyles from "../styles/Hero.module.css";
import heroImg from "../images/wp2406649.jpg";

const Hero = () => {
  return (
    <div
      className={heroStyles.container}
      style={{
        position: "relative",
        height: "100vh",
      }}
    >
      <Image src={heroImg} priority layout="fill" objectFit="cover" alt="Hero image with a house" />
    </div>
  );
};

export default Hero;
