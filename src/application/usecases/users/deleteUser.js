const userRepository = require('../../../infrastructure/repositories/userRepository');

class DeleteUser {
  async execute(id) {
    return await userRepository.delete(id);
  }
}

module.exports = new DeleteUser();
