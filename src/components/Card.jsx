import React from "react";

const Card = (props) => {
  return (
    <div>
      <img src={props.src} alt={props.title} className="card-img" />
      <h2 className="card-title">{props.title}</h2>
      <h3 className="card-description">{props.description}</h3>
      <a href={props.link} className="card-title" />
    </div>
  );
};

export default Card;
