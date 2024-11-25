const userRepository = require('../../../infrastructure/repositories/userRepository');

class UpdateUser {
  async execute(id, userData) {
    return await userRepository.update(id, userData);
  }
}

module.exports = new UpdateUser();

