import React from "react";
import Carousel from "./Carousel";
import ProductList from "./ProductList";

const HomePage = () => {
  return (
    <div>
      <Carousel />
      <section className="py-8 px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          Featured Products
        </h2>
        <ProductList />
      </section>
    </div>
  );
};

export default HomePage;
