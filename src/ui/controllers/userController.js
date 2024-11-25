const GetAllUsers = require('../../application/usecases/users/getAllUsers');
const GetUser = require('../../application/usecases/users/getUser');
const CreateUser = require('../../application/usecases/users/createUser');
const UpdateUser = require('../../application/usecases/users/updateUser');
const DeleteUser = require('../../application/usecases/users/deleteUser');
const requests = require('../../utils/requests');

exports.getAll = async (req, res) => {
  try {
    const users = await GetAllUsers.execute();
    requests.success(res, users, 200);
  } catch (error) {
    requests.error(res, error.message, 500);
  }
};

exports.getById = async (req, res) => {
  try {
    const user = await GetUser.execute(req.params.id);
    if (!user) return requests.error(res, 'Usuario no encontrado', 404);
    requests.success(res, user, 200);
  } catch (error) {
    requests.error(res, error.message, 500);
  }
};

exports.create = async (req, res) => {
  try {
    const newUser = await CreateUser.execute(req.body);
    requests.success(res, newUser, 201);
  } catch (error) {
    requests.error(res, error.message, 500);
  }
};

exports.update = async (req, res) => {
  try {
    const updatedUser = await UpdateUser.execute(req.params.id, req.body);
    requests.success(res, updatedUser, 200);
  } catch (error) {
    requests.error(res, error.message, 500);
  }
};

exports.delete = async (req, res) => {
  try {
    await DeleteUser.execute(req.params.id);
    requests.success(res, 'Usuario eliminado', 204);
  } catch (error) {
    requests.error(res, error.message, 500);
  }
};
