import React from "react";

const MobileAppPromotion = () => {
  return (
    <section className="mobile-app-promotion">
      <div class="content">
        <h1>DOWNLOAD APP & GET THE VOUCHER!</h1>
        <p>
          Get 30% off for first transaction using Rondovision mobile app for
          now.
        </p>
        <div class="image-container">
          <img
            src="./images/app-store/apple-store.svg"
            alt="apple store logo"
          />
          <img src="/images/app-store/play-store.svg" alt="play store logo" />
        </div>
      </div>
      <div class="mobile-app">
        <div class="circle circle-1"></div>
        <div class="circle circle-2"></div>
        <div class="circle circle-3"></div>
        <div class="fill-circle fill-circle-1"></div>
        <div class="fill-circle fill-circle-2"></div>
        <div class="fill-circle fill-circle-3"></div>
        <div class="fill-circle fill-circle-4"></div>
        <img
          src="images/mobile-app/Mobile-app.svg"
          alt="look of our mobile app"
        />
      </div>
    </section>
  );
};

export default MobileAppPromotion;
