import db from "../models/index.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import config from "../config/auth.config.js";
import { Op } from "sequelize";

const User = db.User;
const Role = db.Role;

const authController = {};

// SignUp
authController.signUp = async (req, res) => {
  try {
    const { username, name, email, password, roles } = req.body;
    if (!username || !name || !email || !password) {
      return res.status(400).json({
        message: "Username, Name, Email or Password cannot be empty!",
      });
    }

    const existingUser = await User.findOne({ where: { username } });
    if (existingUser) {
      return res.status(400).json({ message: "Username already exists!" });
    }

    const hashedPassword = bcrypt.hashSync(password, 8);
    const newUser = await User.create({
      username,
      name,
      email,
      password: hashedPassword,
    });

    let assignedRoles = [];
    if (roles && roles.length > 0) {
      const foundRoles = await Role.findAll({
        where: { name: { [Op.or]: roles } },
      });
      if (foundRoles.length === 0) {
        return res.status(400).json({ message: "Role not found!" });
      }
      assignedRoles = foundRoles;
    } else {
      assignedRoles = await Role.findAll({ where: { id: 1 } }); // default role USER
    }

    await newUser.setRoles(assignedRoles);
    res.json({ message: "User was registered successfully!" });
  } catch (error) {
    res.status(500).json({
      message: error.message || "Something went wrong while creating the user",
    });
  }
};

// SignIn
authController.signIn = async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      return res
        .status(400)
        .json({ message: "Username or Password cannot be empty" });
    }

    const user = await User.findOne({ where: { username } });
    if (!user) return res.status(404).json({ message: "Username not found!" });

    const passwordIsValid = bcrypt.compareSync(password, user.password);
    if (!passwordIsValid)
      return res.status(401).json({ message: "Invalid Password!" });

    const token = jwt.sign({ id: user.id }, config.secret, {
      expiresIn: 86400,
    }); // 24h

    const roles = await user.getRoles();
    const authorities = roles.map((role) => "ROLE_" + role.name.toUpperCase());

    res.json({
      token,
      authorities,
      userInfo: {
        username: user.username,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: error.message || "Something went wrong while signing in",
    });
  }
};

export default authController;
