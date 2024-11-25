const userRepository = require('../../../infrastructure/repositories/userRepository');

class GetAllUsers {
  async execute() {
    return await userRepository.findAll();
  }
}

module.exports = new GetAllUsers();
