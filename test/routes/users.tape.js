const test = require('tape');
const request = require('supertest');
const cheerio = require('cheerio');
const app = require('../../app');

test('GET /', function (t) {
    request(app)
        .get('/users/')
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function (err, res) {
            const actual = res.body;
            const expected = [{ name: 'Adán' }, { name: 'Eva' }];
            const message = 'Muestra usuarios de ejemplo';
            t.error(err, 'No error');
            t.same(actual, expected, message);
            t.end();
        });
});