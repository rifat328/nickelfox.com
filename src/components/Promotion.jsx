import React from "react";

const Promotion = () => {
  return (
    <section className="promotion">
      <div className="promotion-image">
        <img
          className="model"
          src="/images/hero2/hero2-model.svg"
          alt="Promotion"
        />
        <img
          className="star"
          src="/images/hero2/hero2-single-star.png"
          alt="Promotion"
        />
      </div>
      <div className="promotion-content">
        <h1 className="promotion-title">
          <span>PAYDAY</span> SALE NOW
        </h1>
        <p>
          Spend minimal $100 get 30% off voucher code for your next purchase
        </p>
        <p>
          <span className="date">1 June - 10 June 2021</span>*Terms & Conditions
          apply
        </p>
        <button className="button">SHOP NOW</button>
      </div>
    </section>
  );
};

export default Promotion;
