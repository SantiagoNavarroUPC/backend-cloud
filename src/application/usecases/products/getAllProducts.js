const productRepository = require('../../../infrastructure/repositories/productRepository');

class GetAllProducts {
  async execute() {
    return await productRepository.findAll();
  }
}

module.exports = new GetAllProducts();
