const { getUsersUseCase } = require('../../usecases/users/index');
const getUsersControllerAdapter = require('./getUsers');

const getUsersController = getUsersControllerAdapter(getUsersUseCase);

module.exports = { getUsersController };