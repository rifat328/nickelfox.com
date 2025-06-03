import React from "react";

const Footer = () => {
  return (
    <section className="footer">
      <div class="main-section">
        <h1>FASHION</h1>
        <p>Complete your style with awesome clothes from us.</p>
        <div class="social-media">
          <a href="http://">
            <img src="/images/footer/fb.png" alt="facebook logo" />
          </a>
          <a href="http://">
            <img
              src="/images/footer/insta.png"
              alt="instagram logo"
            />
          </a>
          <a href="http://">
            <img src="/images/footer/twitter.png" alt="twitter logo" />
          </a>
          <a href="http://">
            <img
              src="/images/footer/linkedin.png"
              alt="linkedin logo"
            />
          </a>
        </div>
      </div>

      <div class="sub-section">
        <div className="footer-company">
          <h2>Company</h2>
          <a href="http://">About</a>
          <a href="http://">Contact us</a>
          <a href="http://">Support</a>
          <a href="http://">Careers</a>
        </div>
        <div className="footer-quick-links">
          <h2>Quick Link</h2>
          <a href="http://">Share Location</a>
          <a href="http://">Orders Tracking</a>
          <a href="http://">Size Guide</a>
          <a href="http://">FAQs</a>
        </div>
        <div className="footer-legal">
          <h2>Legal</h2>
          <a href="http://">Terms & conditions</a>
          <a href="http://">Privacy Policy</a>
        </div>
      </div>
    </section>
  );
};

export default Footer;
