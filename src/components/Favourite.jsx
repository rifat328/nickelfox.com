import React from "react";
import { youngsFavouriteData } from "../category";
import Card from "./Card";
const Favourite = () => {
  const favouriteData = youngsFavouriteData.map((item) => {
    return (
      <Card
        key={item.id}
        src={item.src}
        title={item.title}
        description={item.description}
        link={item.link}
      />
    );
  });
  return (
    <section className="favourite">
      <div className="favourite-heading">
        <img
          className="blob-bg"
          src="images/hero2/Vector 9.svg"
          alt="svg blob"
        />
        <h1>Young’s Favourite</h1>
      </div>
      {favouriteData}
    </section>
  );
};

export default Favourite;
