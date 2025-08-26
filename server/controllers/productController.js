import Product from "../models/Product.model.js";

const productController = {};

// Create new product
productController.create = async (req, res) => {
  const { name, category, imageUrl, price, description } = req.body;

  if (!name || !category || !imageUrl || !price) {
    return res.status(400).send({
      message: "Name, category, imageUrl, and price cannot be empty!",
    });
  }

  try {
    const existing = await Product.findOne({ where: { name } });
    if (existing) {
      return res.status(400).send({ message: "Product already exists!" });
    }

    const newProduct = { name, category, imageUrl, price, description };
    const data = await Product.create(newProduct);
    res.send(data);
  } catch (error) {
    res.status(500).send({
      message: error.message || "Error creating product",
    });
  }
};

// Get all products
productController.getAll = async (req, res) => {
  try {
    const data = await Product.findAll();
    res.send(data);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

// Get product by ID
productController.getById = async (req, res) => {
  const id = req.params.id;
  try {
    const data = await Product.findByPk(id);
    if (!data) {
      return res
        .status(404)
        .send({ message: `Product with id=${id} not found.` });
    }
    res.send(data);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

// Update product
productController.update = async (req, res) => {
  const id = req.params.id;
  const { name, category, imageUrl, price, description } = req.body;

  const updateData = {};
  if (name) updateData.name = name;
  if (category) updateData.category = category;
  if (imageUrl) updateData.imageUrl = imageUrl;
  if (price) updateData.price = price;
  if (description) updateData.description = description;

  if (Object.keys(updateData).length === 0) {
    return res.status(400).send({ message: "No data to update!" });
  }

  try {
    const [num] = await Product.update(updateData, { where: { id } });
    if (num === 1) {
      const updated = await Product.findByPk(id);
      res.send(updated);
    } else {
      res.status(404).send({ message: `Product with id=${id} not found.` });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

// Delete product
productController.deleteById = async (req, res) => {
  const id = req.params.id;
  if (!id) return res.status(400).send({ message: "Id is missing" });

  try {
    const num = await Product.destroy({ where: { id } });
    if (num === 1) {
      res.send({ message: "Product deleted successfully!" });
    } else {
      res.status(404).send({ message: `Product with id=${id} not found.` });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export default productController;
