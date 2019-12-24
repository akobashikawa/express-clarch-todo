const test = require('tape');

const { User } = require('../../entities/users');

test('User getItems', function (t) {
    const user = new User();
    const actual = user.getItems();
    const expected = [];
    const message = 'items';
    t.same(actual, expected, message);
    t.end();
});