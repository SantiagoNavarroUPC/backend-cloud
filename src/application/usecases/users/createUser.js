const userRepository = require('../../../infrastructure/repositories/userRepository');

class CreateUser {
  async execute(userData) {
    return await userRepository.save(userData);
  }
}

module.exports = new CreateUser();

