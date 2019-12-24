const test = require('tape');

const { sayHelloUseCase } = require('../../usecases');

test('sayHelloUseCase', function (t) {
  const actual = sayHelloUseCase('Express');
  const expected = 'Hello Express';
  const message = 'return message';
  t.same(actual, expected, message);
  t.end();
});