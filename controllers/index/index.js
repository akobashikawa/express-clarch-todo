const homeControllerAdapter = require('./home');
const { sayHelloUseCase } = require('../../usecases/index');

const homeController = homeControllerAdapter({ sayHelloUseCase });

module.exports = { homeController };