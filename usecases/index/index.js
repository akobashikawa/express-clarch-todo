const { Hello } = require('../../entities/index');

const helloUseCaseMaker = require('./hello');

exports.hello = helloUseCaseMaker(Hello);