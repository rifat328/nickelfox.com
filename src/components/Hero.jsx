import React from "react";

const Hero = () => {
  return (
    <section className="hero">
      <div class="call-to-action">
        <h1>
          <span className="shape white">LET’S</span> EXPLORE{" "}
          <span className="shape yellow">UNIQUE</span> CLOTHES.
        </h1>
        <p>Live for Influential and Innovative fashion!</p>
        <button>Shop Now</button>
      </div>
      <div className="hero-image">
        <img
          className="star"
          src="/images/hero/hero-img-star.png"
          alt="stars"
        />
        <img
          className="model"
          src="/images/hero/hero-img-model.svg"
          alt="very excited Model"
        />
      </div>
    </section>
  );
};

export default Hero;
