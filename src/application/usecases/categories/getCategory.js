const categoryRepository = require('../../../infrastructure/repositories/categoryRepository');

class GetCategory {
  async execute(id) {
    return await categoryRepository.findById(id);
  }
}

module.exports = new GetCategory();
