const usersUsecases = require('../../usecases/users');

const getItemsControllerMaker = require('./getItems');
const addItemControllerMaker = require('./addItem');
const getItemControllerMaker = require('./getItem');
const updateItemControllerMaker = require('./updateItem');
const deleteItemControllerMaker = require('./deleteItem');

exports.getItems = getItemsControllerMaker(usersUsecases.getItems);
exports.addItem = addItemControllerMaker(usersUsecases.addItem);
exports.getItem = getItemControllerMaker(usersUsecases.getItem);
exports.updateItem = updateItemControllerMaker(usersUsecases.updateItem);
exports.deleteItem = deleteItemControllerMaker(usersUsecases.deleteItem);