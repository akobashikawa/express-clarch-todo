var express = require('express');
var router = express.Router();

const usersControllers = require('../controllers/users');

const {callbackMaker} = require('./callback');

router.get('/', callbackMaker(usersControllers.getItems) );
router.post('/', callbackMaker(usersControllers.addItem) );
router.get('/:id', callbackMaker(usersControllers.getItem) );
router.put('/:id', callbackMaker(usersControllers.updateItem) );
router.delete('/:id', callbackMaker(usersControllers.deleteItem) );

module.exports = router;
