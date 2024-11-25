const productRepository = require('../../../infrastructure/repositories/productRepository');

class GetProduct {
  async execute(id) {
    return await productRepository.findById(id);
  }
}

module.exports = new GetProduct();
