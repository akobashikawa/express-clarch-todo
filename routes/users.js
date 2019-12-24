require('dotenv').config();

var express = require('express');
var router = express.Router();

const { getCallbackAdapter } = require('../express-callback');
const { getUsersController } = require('../controllers/users');

const mongoose = require('mongoose');

mongoose.connect(`${process.env.MONGO_URL}`, { useNewUrlParser: true, useUnifiedTopology: true });

const User = mongoose.model('User', { name: String });

// const db = mongoose.connection;
// db.once('open', _ => {
//     console.log('Database connected:', url)
// });

// db.on('error', err => {
//     console.error('connection error:', err)
// });

// const getUsersCallback = getCallbackAdapter({ controller: getUsersController });
// router.get('/', getUsersCallback);
router.get('/', async function (req, res) {
    try {
        const result = await User.find();
        const response = {
            result
        };
        res.json(response);
    } catch (error) {
        console.log(error);
        const response = {
            message: 'Error listando items',
        };
        res.status(500).json(response);
    }
});

router.get('/test-add', async function (req, res) {
    const name = req.query['name'];
    const newItem = new User({ name });
    try {
        const result = await newItem.save();
        console.log(result);
        const response = {
            name,
            message: 'Item agregado',
            result
        };
        res.end(response);
    } catch (error) {
        console.log(error);
        const response = {
            name,
            message: 'Error agregando item',
        };
        res.status(500).json(response);
    }
});

module.exports = router;
