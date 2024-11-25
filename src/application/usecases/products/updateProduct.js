const productRepository = require('../../../infrastructure/repositories/productRepository');

class UpdateProduct {
  async execute(id, productData) {
    return await productRepository.update(id, productData);
  }
}

module.exports = new UpdateProduct();

