import React from "react";

const Card = ({ id, name, description, image }) => {
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "คุณแน่ใจหรือไม่ว่าต้องการลบสินค้านี้?"
    );
    if (!confirmDelete) return;
    try {
      const response = await fetch("http://localhost:3000/products/" + id, {
        method: "DELETE",
      });
      if (response.ok) {
        alert("Deleted product successfully!");
      } else {
        alert("Failed to delete product.");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure>
        <img src={image} alt={name} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {name}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <a href={"/update/" + id} className="btn btn-warning">
            Edit
          </a>
          <button
            onClick={() => handleDelete(id)}
            className="btn btn-error"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
