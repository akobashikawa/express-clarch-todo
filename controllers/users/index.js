const usersUsecases = require('../../usecases/users');

const getItemsControllerMaker = require('./getItems');
const addItemControllerMaker = require('./addItem');

exports.getItems = getItemsControllerMaker(usersUsecases.getItems);
exports.addItem = addItemControllerMaker(usersUsecases.addItem);