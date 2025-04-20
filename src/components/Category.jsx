import React from "react";
import Card from "./Card";
import { categoryData } from "../category";
const Category = () => {
  const categories = categoryData.map((category) => {
    return (
      <Card
        key={category.id}
        src={category.src}
        title={category.title}
        description={category.description}
        link={category.link}
      />
    );
  });
  return (
    <section className="new-arrivals">
      <h1>NEW ARRIVALS</h1>
      {categories}
    </section>
  );
};

export default Category;
