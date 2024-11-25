const GetAllCategories = require('../../application/usecases/categories/getAllCategories');
const GetCategory = require('../../application/usecases/categories/getCategory');
const CreateCategory = require('../../application/usecases/categories/createCategory');
const UpdateCategory = require('../../application/usecases/categories/updateCategory');
const DeleteCategory = require('../../application/usecases/categories/deleteCategory');
const requests = require('../../utils/requests');

exports.getAll = async (req, res, next) => {
  try {
    const categories = await GetAllCategories.execute();
    requests.success(res, categories, 200);
  } catch (error) {
    requests.error(res, error.message, 500);
  }
};

exports.getById = async (req, res, next) => {
  try {
    const category = await GetCategory.execute(req.params.id);
    if (!category) return requests.error(res, 'Categoría no encontrada', 404);
    requests.success(res, category, 200);
  } catch (error) {
    requests.error(res, error.message, 500);
  }
};

exports.create = async (req, res, next) => {
  try {
    const newCategory = await CreateCategory.execute(req.body);
    requests.success(res, newCategory, 201);
  } catch (error) {
    requests.error(res, error.message, 500);
  }
};

exports.update = async (req, res, next) => {
  try {
    const updatedCategory = await UpdateCategory.execute(req.params.id, req.body);
    requests.success(res, updatedCategory, 200);
  } catch (error) {
    requests.error(res, error.message, 500);
  }
};

exports.delete = async (req, res, next) => {
  try {
    await DeleteCategory.execute(req.params.id);
    requests.success(res, 'Categoría eliminada', 204);
  } catch (error) {
    requests.error(res, error.message, 500);
  }
};
