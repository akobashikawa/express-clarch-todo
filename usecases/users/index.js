const { User } = require('../../entities/users');

const getItemsUseCaseMaker = require('./getItems');
const addItemUseCaseMaker = require('./addItem');
const getItemUseCaseMaker = require('./getItem');
const updateItemUseCaseMaker = require('./updateItem');
const deleteItemUseCaseMaker = require('./deleteItem');

exports.getItems = getItemsUseCaseMaker(User);
exports.addItem = addItemUseCaseMaker(User);
exports.getItem = getItemUseCaseMaker(User);
exports.updateItem = updateItemUseCaseMaker(User);
exports.deleteItem = deleteItemUseCaseMaker(User);