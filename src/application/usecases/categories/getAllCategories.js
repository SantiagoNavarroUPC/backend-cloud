const categoryRepository = require('../../../infrastructure/repositories/categoryRepository');

class GetAllCategories {
  async execute() {
    return await categoryRepository.findAll();
  }
}

module.exports = new GetAllCategories();
