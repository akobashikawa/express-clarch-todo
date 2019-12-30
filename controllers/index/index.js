// entities
const {HelloMaker} = require('../../entities/index');

const Hello = HelloMaker();

// usecases

const {helloUseCaseMaker} = require('../../usecases/index');

const helloUseCase = helloUseCaseMaker(Hello);

// controllers

const homeControllerMaker = require('./home');
const helloControllerMaker = require('./hello');

exports.home = homeControllerMaker(helloUseCase);
exports.hello = helloControllerMaker(helloUseCase);