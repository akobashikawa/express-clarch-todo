const helloUseCaseAdapter = require('./sayHello');
const { Hello } = require('../../entities/index');

const sayHelloUseCase = helloUseCaseAdapter({ Hello });

module.exports = { sayHelloUseCase };