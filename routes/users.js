var express = require('express');
var router = express.Router();

const usersControllers = require('../controllers/users');

const {callbackMaker} = require('./callback');

router.get('/', callbackMaker(usersControllers.getItems) );
router.post('/', callbackMaker(usersControllers.addItem) );
router.get('/:id', callbackMaker(usersControllers.getItem) );
router.put('/:id', callbackMaker(usersControllers.updateItem) );
router.delete('/:id', callbackMaker(usersControllers.deleteItem) );

/*
router.get('/:id', async function (req, res) {
    const id = req.params['id'];
    try {
        const result = await User.findById(id);
        const response = {
            id,
            result
        };
        res.json(response);
    } catch (error) {
        console.log(error);
        const response = {
            id,
            message: 'Error listando item',
        };
        res.status(500).json(response);
    }
});

router.put('/:id', async function (req, res) {
    const id = req.params['id'];
    const name = req.body['name'];
    try {
        const result = await User.findByIdAndUpdate(id, {$set: {name}}, {new: true});
        console.log(result);
        const response = {
            id,
            name,
            message: 'Item actualizado',
            result
        };
        res.json(response);
    } catch (error) {
        console.log(error);
        const response = {
            id,
            name,
            message: 'Error actualizando item',
        };
        res.status(500).json(response);
    }
});

router.delete('/:id', async function (req, res) {
    const id = req.params['id'];
    try {
        const result = await User.findByIdAndRemove(id);
        console.log(result);
        const response = {
            id,
            message: 'Item eliminado',
            result
        };
        res.json(response);
    } catch (error) {
        console.log(error);
        const response = {
            id,
            message: 'Error eliminando item',
        };
        res.status(500).json(response);
    }
});
*/


module.exports = router;
