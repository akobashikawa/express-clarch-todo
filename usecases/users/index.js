const { User } = require('../../entities/users');
const getItemsUseCaseMaker = require('./getItems');
const addItemUseCaseMaker = require('./addItem');

const getItemsUseCase = getItemsUseCaseMaker({ User });
const addItemUseCase = addItemUseCaseMaker({ User });

module.exports = { getItemsUseCase, addItemUseCase };