import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";

const Update = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [restaurant, setRestaurant] = useState({
    title: "",
    type: "",
    img: "",
  });

  // ดึงข้อมูล Restaurant ตาม id
  useEffect(() => {
    fetch(`http://localhost:3000/restaurants/${id}`)
      .then((res) => res.json())
      .then((data) => setRestaurant(data))
      .catch((err) => console.log(err.message));
  }, [id]);

  // handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setRestaurant({ ...restaurant, [name]: value });
  };

  // handle submit
  const handleSubmit = async () => {
    try {
      const response = await fetch(`http://localhost:3000/restaurants/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(restaurant),
      });
      if (response.ok) {
        alert("Restaurant updated successfully!");
        navigate("/"); // กลับไปหน้า Home หรือ list
      } else {
        alert("Failed to update restaurant.");
      }
    } catch (error) {
      console.log(error);
    }
  };

  // handle cancel
  const handleCancel = () => {
    setRestaurant({ title: "", type: "", img: "" });
    navigate("/"); // กลับไปหน้า list
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Update Restaurant</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Name */}
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            name="title"
            value={restaurant.title}
            onChange={handleChange}
            placeholder="Enter restaurant name"
            className="input input-bordered w-full"
          />
        </div>

        {/* Details */}
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Details</span>
          </label>
          <input
            type="text"
            name="type"
            value={restaurant.type}
            onChange={handleChange}
            placeholder="Enter details"
            className="input input-bordered w-full"
          />
        </div>

        {/* Image URL */}
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Image URL</span>
          </label>
          <input
            type="text"
            name="img"
            value={restaurant.img}
            onChange={handleChange}
            placeholder="Enter image URL"
            className="input input-bordered w-full"
          />
        </div>

        {/* Image Preview */}
        {restaurant.img && (
          <div className="flex justify-center items-center">
            <img
              className="h-48 rounded-md shadow"
              src={restaurant.img}
              alt="Preview"
            />
          </div>
        )}
      </div>

      {/* Buttons */}
      <div className="flex justify-center gap-4 mt-6">
        <button className="btn btn-info" onClick={handleSubmit}>
          Update
        </button>
        <button className="btn btn-outline" onClick={handleCancel}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default Update;
