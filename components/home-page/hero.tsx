import React from "react";
import classes from "./hero.module.css";
import Image from "next/image";

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/nirmal.png"
          alt="Nirmal Image"
          width={300}
          height={300}
          priority
        />
      </div>
      <h1>Hie I'm Nirmal </h1>
      <p>
        I blog about web development - espacially frontend frameworks like
        Angular or React.
      </p>
    </section>
  );
}

export default Hero;
