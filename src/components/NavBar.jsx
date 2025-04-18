import React from "react";

const NavBar = () => {
  return (
    <div>
      <nav className="nav-bar">
        <img
          src="/logos/fashion.svg"
          alt="fashion logo"
          className="fashion-logo-img"
        />
        <section className="nav-container">
          <ul className="nav-list">
            <li className="nav-item">CATALOGUE</li>
            <li className="nav-item">FASHION</li>
            <li className="nav-item">FAVOURITE</li>
            <li className="nav-item">LIFESTYLE</li>
          </ul>
          <button className="sign-up">SIGN UP</button>
        </section>
      </nav>
    </div>
  );
};

export default NavBar;
