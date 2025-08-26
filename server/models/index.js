import sequelize from "./db.js";
import Sequelize from "sequelize";

import User from "./user.models.js";
import Role from "./role.models.js";
import Product from "./Product.model.js"; // สำหรับร้าน DIY

const db = {};
db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.User = User;
db.Role = Role;
db.Product = Product;

// Associations User ↔ Role
db.User.belongsToMany(db.Role, {
  through: "user_roles",
});
db.Role.belongsToMany(db.User, {
  through: "user_roles",
});

export default db;
