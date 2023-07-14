import express from 'express';
import Product from '../models/Product.js';

const router = express.Router();

// Route: GET /products
// Get all products
router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch products' });
  }
});

// Route: GET /products/:productId
// Get a specific product by ID
router.get('/:productId', async (req, res) => {
  try {
    const product = await Product.find({id : req.params.productId});
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch product' });
  }
});

// Route: POST /products
// Create a new product
router.post('/', async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create product' });
  }
});

// Route: PUT /products/:productId
// Update a product by ID
router.put('/products/:id', async (req, res) => {
    const productId = req.params.name;
    const updatedProduct = req.body;
  
    try {
      const product = await Product.findOneAndUpdate(
        { id: productId },
        updatedProduct,
        { new: true }
      );
  
      if (product) {
        res.json(product);
      } else {
        res.status(404).json({ error: 'Product not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  });

// Route: DELETE /products/:productId
// Delete a product by ID
router.delete('/:id', async (req, res) => {
    const productId = req.params.id;
  
    try {
      const deletedProduct = await Product.findOneAndRemove({ id: productId });
  
      if (deletedProduct) {
        res.json(deletedProduct);
      } else {
        res.status(404).json({ error: 'Product not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  });

export default router;
