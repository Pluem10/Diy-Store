import { DataTypes } from "sequelize";
import sequelize from "./db.js";

const Product = sequelize.define("product", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  imageUrl: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
});

// สร้าง table ถ้ายังไม่มี
// Product.sync({ force: false })
//   .then(() => console.log("Product table created or already exists"))
//   .catch((error) => console.log("Error creating Product table", error));

export default Product;
