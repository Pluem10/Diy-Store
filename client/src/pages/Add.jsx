import React, { useState } from "react";
import NavBar from "../components/NavBar";

export const Add = () => {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    image: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch("http://localhost:3000/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      });
      if (response.ok) {
        alert("Product added successfully !!");
        setProduct({
          name: "",
          description: "",
          image: "",
        });
      } else {
        alert("Failed to add product.");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mx-auto">
      <div>
        <h1 className="title justify-center text-3xl text-center m-5 gap-x-5">
          Add DIY Product
        </h1>
      </div>
      <div className="mb-5 flex justify-center items-center max-w">
        <label className="input">
          Name :
          <input
            type="text"
            name="name"
            className="grow"
            placeholder="Add product name"
            value={product.name}
            onChange={handleChange}
          />
        </label>
        <label className="input">
          Description :
          <input
            type="text"
            name="description"
            className="grow"
            placeholder="Add product description"
            value={product.description}
            onChange={handleChange}
          />
        </label>
        <label className="input">
          Image URL :
          <input
            type="text"
            name="image"
            className="grow"
            placeholder="Add image URL"
            value={product.image}
            onChange={handleChange}
          />
        </label>
        {product.image && (
          <div className="flex items-center gap-2">
            <img className="h-32" src={product.image} alt="Preview" />
          </div>
        )}
      </div>
      <div>
        <button className="btn btn-soft btn-success" onClick={handleSubmit}>
          Add
        </button>
        <button
          className="btn btn-soft btn-error "
          onClick={() =>
            setProduct({
              name: "",
              description: "",
              image: "",
            })
          }
        >
          Cancel
        </button>
      </div>
    </div>
  );
};
