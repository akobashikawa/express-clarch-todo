var express = require('express');
var router = express.Router();

const {
  getItemsController,
  addItemController,
  getItemController,
  updateItemController,
  deleteItemController,
} = require('../controllers/users');

const {callbackMaker} = require('./callback');

router.get('/', callbackMaker(getItemsController) );
router.post('/', callbackMaker(addItemController) );
router.get('/:id', callbackMaker(getItemController) );
router.put('/:id', callbackMaker(updateItemController) );
router.delete('/:id', callbackMaker(deleteItemController) );

module.exports = router;
