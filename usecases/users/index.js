const { User } = require('../../entities/users');
const getItemsUseCaseMaker = require('./getItems');

const getItemsUseCase = getItemsUseCaseMaker({ User });

module.exports = { getItemsUseCase };