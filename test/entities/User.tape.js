const test = require('tape');

const UserMaker = require('../../entities/users/User');

const usersdb = [
    {_id: '1', name: 'Mike'},
];

const User = UserMaker({
    getItems: () => usersdb,
    addItem: ({name}) => ({_id: (usersdb.length + 1), name}),
    getItem: (id) => usersdb.find(x => (x._id == id)),
    updateItem: ({ id, name }) => {
        const item = usersdb.find(x => (x._id == id));
        item.name = name;
        return item;
    },
    deleteItem: (id) => {
        const index = usersdb.findIndex(x => (x._id == id));
        return usersdb.splice(index, 1)[0];
    },
});

test('User getItems', function (t) {
    const user = new User();
    const actual = user.getItems();
    const expected = [ { _id: '1', name: 'Mike' } ];
    const message = 'lista todos los items';
    t.same(actual, expected, message);
    t.end();
});

test('User addItem', function (t) {
    const user = new User();
    const actual = user.addItem({name: 'Ann'}).name;
    const expected = 'Ann';
    const message = 'muestra item agregado';
    t.same(actual, expected, message);
    t.end();
});

test('User getItem', function (t) {
    const user = new User();
    const actual = user.getItem(1)._id;
    const expected = '1';
    const message = 'lista item indicado';
    t.same(actual, expected, message);
    t.end();
});

test('User updateItem', function (t) {
    const user = new User();
    const actual = user.updateItem({ id: '1', name: 'Ann' }).name;
    const expected = 'Ann';
    const message = 'muestra item modificado';
    t.same(actual, expected, message);
    t.end();
});

test('User deleteItem', function (t) {
    const user = new User();
    const actual = user.deleteItem('1').name;
    const expected = 'Ann';
    const message = 'muestra item eliminado';
    t.same(actual, expected, message);
    t.end();
});

