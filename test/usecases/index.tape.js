const test = require('tape');

const indexUsecases = require('../../usecases/index');

test('hello', function (t) {
  const actual = indexUsecases.hello('Express');
  const expected = 'Hello Express';
  const message = 'return message';
  t.same(actual, expected, message);
  t.end();
});