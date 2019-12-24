const test = require('tape');

const { homeController } = require('../../controllers/index');

test('homeController', function (t) {
  const actual = homeController();
  const expected = { message: 'Hello Express' };
  const message = 'return json with message';
  t.same(actual, expected, message);
  t.end();
});