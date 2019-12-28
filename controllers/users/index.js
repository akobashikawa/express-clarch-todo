const { getItemsUseCase } = require('../../usecases/users/index');
const getItemsControllerMaker = require('./getItems');

const getItemsController = getItemsControllerMaker({usecase: getItemsUseCase});

module.exports = { getItemsController };