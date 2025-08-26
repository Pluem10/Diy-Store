import productController from "../controllers/product.controller.js";
import express from "express";

const router = express.Router();

// POST http://localhost:5000/api/v1/products
router.post("/", productController.create);

// GET http://localhost:5000/api/v1/products
router.get("/", productController.getAll);

// GET http://localhost:5000/api/v1/products/:id
router.get("/:id", productController.getById);

// PUT http://localhost:5000/api/v1/products/:id
router.put("/:id", productController.update);

// DELETE http://localhost:5000/api/v1/products/:id
router.delete("/:id", productController.deleteById);

export default router;
