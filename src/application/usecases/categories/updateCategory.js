const categoryRepository = require('../../../infrastructure/repositories/categoryRepository');

class UpdateCategory {
  async execute(id, categoryData) {
    return await categoryRepository.update(id, categoryData);
  }
}

module.exports = new UpdateCategory();

