var express = require('express');
var router = express.Router();

const {
    getItemsController,
    addItemController,
} = require('../controllers/users');

const getItemsCallbackMaker = ({controller}) => {

    return async function (req, res) {
        const request = {};
        const result = {};
        try {
            const response = await controller(request);
            console.log('response', response);
            result.response = response;
            res.json(result);
        } catch (error) {
            console.log(error);
            result.message = 'Error listando items';
            res.status(500).json(result);
        }
    };
};

router.get('/', getItemsCallbackMaker({ controller: getItemsController }));

const addItemCallbackMaker = function({controller}) {
    return async function (req, res) {
        const name = req.body['name'];
        const request = { name };
        const result = { name };
        try {
            const response = await controller(request);
            console.log(response);
            result.response = response;
            res.json(result);
        } catch (error) {
            console.log(error);
            result.message = 'Error agregando item';
            res.status(500).json(result);
        }
    }
};

router.post('/', addItemCallbackMaker({controller: addItemController}));

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


module.exports = router;
