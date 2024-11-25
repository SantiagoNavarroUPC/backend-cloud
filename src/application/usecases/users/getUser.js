const userRepository = require('../../../infrastructure/repositories/userRepository');

class GetUser {
  async execute(id) {
    return await userRepository.findById(id);
  }
}

module.exports = new GetUser();
