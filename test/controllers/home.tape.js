const test = require('tape');

const indexControllers = require('../../controllers/index');

test('indexController.home', function (t) {
  const actual = indexControllers.home();
  const expected = { message: 'Hello Express' };
  const message = 'return json with message';
  t.same(actual, expected, message);
  t.end();
});