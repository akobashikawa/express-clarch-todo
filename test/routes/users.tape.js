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
            const actual = res.body.length == 0 || res.body[0].hasOwnProperty('_id');
            const expected = true;
            const message = 'getItems';
            t.error(err, 'No error');
            t.same(actual, expected, message);
            t.end();
        });
});

test('GET /:id', function (t) {
    request(app)
        .get('/users/5e079ed3ad6c990774f13415')
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function (err, res) {
            const actual = res.body.length == 0 || res.body.hasOwnProperty('_id');
            const expected = true;
            const message = 'getItem';
            t.error(err, 'No error');
            t.same(actual, expected, message);
            t.end();
        });
});