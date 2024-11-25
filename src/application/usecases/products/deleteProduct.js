const productRepository = require('../../../infrastructure/repositories/productRepository');

class DeleteProduct {
  async execute(id) {
    return await productRepository.delete(id);
  }
}

module.exports = new DeleteProduct();
