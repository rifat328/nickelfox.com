import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
const Card = (props) => {
  return (
    <div className="card">
      <img src={props.src} alt={props.title} className="card-img" />
      <div class="card-detail-container">
        <h2 className="card-title">{props.title}</h2>
        <h3 className="card-description">{props.description}</h3>
        <a href={props.link} className="card-link">
          <FaArrowRightLong />
        </a>
      </div>
    </div>
  );
};

export default Card;
