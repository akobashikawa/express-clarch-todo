var express = require('express');
var router = express.Router();

const indexControllers = require('../controllers/index');

const { renderCallbackMaker, syncCallbackMaker } = require('./callback');


router.get('/', renderCallbackMaker({ controller: indexControllers.home, view: 'index' }) );
router.get('/hello', syncCallbackMaker(indexControllers.hello));

module.exports = router;
