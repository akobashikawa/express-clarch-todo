var express = require('express');
var router = express.Router();

//// entity = entityFactory(dependency)
const missHelloFactory = function (greeting) {
  return {
    greeting,
    getGreeting: function () {
      return this.greeting;
    }
  };
}

// const missHello = {
//   getGreeting: function() {
//     return 'Hello';
//   }
// };
const missHello = missHelloFactory('Hello');

//// useCase = makeUseCase(entity(dependency))
const makeSayHelloUseCase = function ({ missHello }) {
  return function sayHelloUseCase(name) {
    const greeting = missHello.getGreeting();
    return `${greeting} ${name}`;
  };
};

const { homeController, helloController } = require('../controllers/index');
const { renderCallbackAdapter, getSyncCallbackAdapter } = require('../express-callback');

const homeCallback = renderCallbackAdapter({ view: 'index', controller: homeController });
router.get('/', homeCallback);

const helloCallback = getSyncCallbackAdapter({ controller: homeController });
router.get('/hello', helloCallback);

module.exports = router;
