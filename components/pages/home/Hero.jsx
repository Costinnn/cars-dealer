import Image from "next/image";

import heroImg from "@/public/images/hero.png";

import "./Hero.scss";

const Hero = () => {
  return (
    <section className="hero_home section_wide">
      <h1 className="title">AUTOS WORLD</h1>
      <Image
        src={heroImg}
        fill
        priority
        sizes="100vw"
        alt="hero"
        className="hero_img"
      />
      <h2 className="subtitle">
        Find your desired car in our stock or order it online!
      </h2>
    </section>
  );
};

export default Hero;
