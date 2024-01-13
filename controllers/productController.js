// /src/controllers/productController.js

const express = require('express');
const router = express.Router();
const Product = require('../models/product');

router.get('/products', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post('/products', async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();
    res.status(201).json(product);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.get('/products/:id', getProduct, (req, res) => {
  res.json(res.product);
});

router.put('/products/:id', getProduct, async (req, res) => {
  if (req.body.variants) {
    res.product.variants = req.body.variants;
  }

  try {
    await res.product.save();
    res.json(res.product);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.delete('/products/:id', getProduct, async (req, res) => {
  try {
    await res.product.deleteOne();
    res.json({ message: 'Product deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get('/search', async (req, res) => {
  const query = req.query.q;

  try {
    const products = await Product.find({
      $or: [
        { name: { $regex: query, $options: 'i' } },
        { description: { $regex: query, $options: 'i' } },
        { 'variants.name': { $regex: query, $options: 'i' } },
      ],
    });
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

async function getProduct(req, res, next) {
  let product;

  try {
    product = await Product.findById(req.params.id);
    if (product == null) {
      return res.status(404).json({ message: 'Product not found' });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.product = product;
  next();
}

module.exports = router;
