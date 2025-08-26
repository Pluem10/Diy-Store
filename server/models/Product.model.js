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
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: true, // ใส่เป็น optional ถ้าอยากขายสินค้า
  },
});

// สร้าง table ถ้ายังไม่มี
// Product.sync({ force: false })
//   .then(() => console.log("Product table created or already exists"))
//   .catch((error) => console.log("Error creating Product table", error));

export default Product;
