const categoryRepository = require('../../../infrastructure/repositories/categoryRepository');

class CreateCategory {
  async execute(categoryData) {
    return await categoryRepository.save(categoryData);
  }
}

module.exports = new CreateCategory();
