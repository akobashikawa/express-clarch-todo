const { 
  getItemsUseCase, 
  addItemUseCase 
} = require('../../usecases/users');

const getItemsControllerMaker = require('./getItems');
const addItemControllerMaker = require('./addItem');

const getItemsController = getItemsControllerMaker({getItemsUseCase});
const addItemController = addItemControllerMaker({addItemUseCase});

module.exports = { getItemsController, addItemController };