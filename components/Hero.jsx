import Image from "next/image";
import heroStyles from "../styles/Hero.module.css";
import heroImg from "../images/photo-1505843513577-22bb7d21e455.jpg";

const Hero = () => {
  return (
    <div>
      <div className={heroStyles.img}>
        <Image src={heroImg} priority alt="Hero image with a house" />
      </div>
    </div>
  );
};

export default Hero;
