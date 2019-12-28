const test = require('tape');
const request = require('supertest');
const cheerio = require('cheerio');
const app = require('../../app');

test('GET /', function (t) {
    request(app)
        .get('/')
        .expect(200)
        .expect('Content-Type', /html/)
        .end(function (err, res) {
            const $ = cheerio.load(res.text);
            const actual = $('.message').text();
            const expected = 'Hello Express';
            const message = 'show home page';
            t.error(err, 'No error');
            t.same(actual, expected, message);
            t.end();
        });
});

test('GET /hello', function (t) {
    request(app)
        .get('/hello')
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function (err, res) {
            const actual = res.body;
            const expected = { "message": "Hello Express" };
            const message = 'show hello message';
            t.error(err, 'No error');
            t.same(actual, expected, message);
            t.end();
        });
});