import React from "react";
import Card from "./Card";

const Products = ({ products }) => {
  return (
    <div className="flex">
      <div className="flex flex-wrap justify-center gap-4">
        {products &&
          products.map((product) => {
            return (
              <Card
                key={product.id}
                id={product.id}
                name={product.name}
                description={product.description}
                image={product.image}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Products;
