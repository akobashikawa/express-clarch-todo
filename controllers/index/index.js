const indexUsecases = require('../../usecases/index');

const homeControllerMaker = require('./home');
const helloControllerMaker = require('./hello');

exports.home = homeControllerMaker(indexUsecases.hello);
exports.hello = helloControllerMaker(indexUsecases.hello);