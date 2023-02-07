const Product = require('../models/product')

const getAllProductsStatic = async (req, res) => {
  const products = await Product.find({company:'ikea', name: "shelf"})
  res.status(200).json({products, nbHits: products.length})
  throw new Error('something went wrong!')
}

const getAllProducts = async (req, res) => {
  res.status(200).json({msg: 'products route'})
}

module.exports = {
  getAllProducts,
  getAllProductsStatic
}