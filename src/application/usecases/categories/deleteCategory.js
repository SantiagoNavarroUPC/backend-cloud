const categoryRepository = require('../../../infrastructure/repositories/categoryRepository');

class DeleteCategory {
  async execute(id) {
    return await categoryRepository.delete(id);
  }
}

module.exports = new DeleteCategory();
