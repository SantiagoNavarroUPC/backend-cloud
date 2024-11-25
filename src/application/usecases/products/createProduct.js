const productRepository = require('../../../infrastructure/repositories/productRepository');

class CreateProduct {
  async execute(productData) {
    return await productRepository.save(productData);
  }
}

module.exports = new CreateProduct();
