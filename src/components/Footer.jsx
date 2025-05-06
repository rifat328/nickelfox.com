import React from "react";

const Footer = () => {
  return (
    <section className="footer">
      <div class="main-section">
        <h1>FASHION</h1>
        <p></p>
        <div class="social-media">
          <a href="http://">
            <img src="/images/social-media/facebook.svg" alt="facebook logo" />
          </a>
          <a href="http://">
            <img
              src="/images/social-media/instagram.svg"
              alt="instagram logo"
            />
          </a>
          <a href="http://">
            <img src="/images/social-media/twitter.svg" alt="twitter logo" />
          </a>
          <a href="http://">
            <img src="/images/social-media/youtube.svg" alt="youtube logo" />
          </a>
          <a href="http://">
            <img
              src="/images/social-media/pinterest.svg"
              alt="pinterest logo"
            />
          </a>
        </div>
      </div>

      <div class="sub-section">
        <div className="company">
          <h2>Company</h2>
          <a href="http://">About</a>
          <a href="http://">Contact us</a>
          <a href="http://">Support</a>
          <a href="http://">Careers</a>
        </div>
        <div className="quick-links">
          <h2>Quick Link</h2>
          <a href="http://">Share Location</a>
          <a href="http://">Orders Tracking</a>
          <a href="http://">Size Guide</a>
          <a href="http://">FAQs</a>
        </div>
        <div className="legal">
          <h2>Legal</h2>
          <a href="http://">Terms & conditions</a>
          <a href="http://">Privacy Policy</a>
        </div>
      </div>
    </section>
  );
};

export default Footer;
