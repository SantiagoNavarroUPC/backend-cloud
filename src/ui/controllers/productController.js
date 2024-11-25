const GetAllProducts = require('../../application/usecases/products/getAllProducts');
const GetProduct = require('../../application/usecases/products/getProduct');
const CreateProduct = require('../../application/usecases/products/createProduct');
const UpdateProduct = require('../../application/usecases/products/updateProduct');
const DeleteProduct = require('../../application/usecases/products/deleteProduct');
const requests = require('../../utils/requests');

exports.getAll = async (req, res, next) => {
  try {
    const products = await GetAllProducts.execute();
    requests.success(res, products, 200);
  } catch (error) {
    requests.error(res, error.message, 500);
  }
};

exports.getById = async (req, res, next) => {
  try {
    const product = await GetProduct.execute(req.params.id);
    if (!product) return requests.error(res, 'Producto no encontrado', 404);
    requests.success(res, product, 200);
  } catch (error) {
    requests.error(res, error.message, 500);
  }
};

exports.create = async (req, res, next) => {
  try {
    const newProduct = await CreateProduct.execute(req.body);
    requests.success(res, newProduct, 201);
  } catch (error) {
    requests.error(res, error.message, 500);
  }
};

exports.update = async (req, res, next) => {
  try {
    const updatedProduct = await UpdateProduct.execute(req.params.id, req.body);
    requests.success(res, updatedProduct, 200);
  } catch (error) {
    requests.error(res, error.message, 500);
  }
};

exports.delete = async (req, res, next) => {
  try {
    await DeleteProduct.execute(req.params.id);
    requests.success(res, 'Producto eliminado', 204);
  } catch (error) {
    requests.error(res, error.message, 500);
  }
};
