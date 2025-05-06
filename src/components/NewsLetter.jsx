import React from "react";

const NewsLetter = () => {
  return (
    <section className="newsletter">
      <h1>JOIN SHOPPING COMMUNITY TO GET MONTHLY PROMO</h1>
      <p>Type your email down below and be young wild generation</p>
      <div class="form-section">
        <form action="#">
          <input
            className="email-input"
            type="email"
            placeholder="Add your email here"
            required
          />
          <button className="button send-button" type="submit">
            SEND
          </button>
        </form>
      </div>
    </section>
  );
};

export default NewsLetter;
