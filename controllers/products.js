const getAllProductsStatic = async (req, res) => {
  res.status(200).json({msg: 'products testing route'})
  throw new Error('something went wrong!')
}

const getAllProducts = async (req, res) => {
  res.status(200).json({msg: 'products route'})
}

module.exports = {
  getAllProducts,
  getAllProductsStatic
}