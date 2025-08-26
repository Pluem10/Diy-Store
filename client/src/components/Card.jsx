import React from "react";
import { useAuthContext } from "../context/AuthContext";

const Card = ({ id, name, description, image }) => {
  const { user } = useAuthContext();

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "คุณแน่ใจหรือไม่ว่าต้องการลบสินค้านี้?"
    );
    if (!confirmDelete) return;
    try {
      const response = await fetch(
        "http://localhost:5000/api/v1/products/" + id,
        {
          method: "DELETE",
        }
      );
      if (response.ok) {
        alert("Product deleted successfully!");
        window.location.reload(); // Reload the page to reflect changes
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
          {user && user.authorities.includes("ROLE_ADMIN") && (
            <>
              <a href={"/update/" + id} className="btn btn-warning">
                Edit
              </a>
              <button
                onClick={() => handleDelete(id)}
                className="btn btn-error"
              >
                Delete
              </button>
            </>
          )}
          {user &&
            !user.authorities.includes("ROLE_ADMIN") &&
            user.authorities.includes("ROLE_MODERATOR") && (
              <a href={"/update/" + id} className="btn btn-warning">
                Edit
              </a>
            )}
        </div>
      </div>
    </div>
  );
};

export default Card;
