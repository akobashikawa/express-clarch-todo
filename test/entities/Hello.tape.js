const test = require('tape');

const { Hello } = require('../../entities/index');

test('Hello greeting', function (t) {
  const hello = new Hello({ greeting: 'Hello' });
  const actual = hello.greeting;
  const expected = 'Hello';
  const message = 'field greeting';
  t.same(actual, expected, message);
  t.end();
});

test('Hello getGreeting()', function (t) {
  const hello = new Hello({ greeting: 'Hello' });
  const actual = hello.getGreeting();
  const expected = 'Hello';
  const message = 'function greeting';
  t.same(actual, expected, message);
  t.end();
});