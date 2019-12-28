const { User } = require('../../entities/users');

const getItemsUseCaseMaker = require('./getItems');
const addItemUseCaseMaker = require('./addItem');

exports.getItems = getItemsUseCaseMaker(User);
exports.addItem = addItemUseCaseMaker(User);