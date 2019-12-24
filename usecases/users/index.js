const getUsersUseCaseAdapter = require('./getUsers');
const { User } = require('../../entities/users/User');

const getUsersUseCase = getUsersUseCaseAdapter({ User });

module.exports = { getUsersUseCase };