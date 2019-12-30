require('dotenv').config();

const mongoose = require('mongoose');
mongoose.connect(`${process.env.MONGO_URL}`, { useNewUrlParser: true, useUnifiedTopology: true });
const UserModel = mongoose.model('User', { name: String });

// const db = mongoose.connection;
// db.once('open', _ => {
//     console.log('Database connected:', url)
// });

// db.on('error', err => {
//     console.error('connection error:', err)
// });


// entities

const {UserMaker} = require('../../entities/users');

const User = UserMaker({
  getItems: () => UserModel.find(),
  addItem: ({ name }) => {
    const user = new UserModel({ name });
    return user.save();
  },
  getItem: (id) => UserModel.findById(id),
  updateItem: ({ id, name }) => UserModel.findByIdAndUpdate(id, { $set: { name } }, { new: true, useFindAndModify: false }),
  deleteItem: (id) => UserModel.findByIdAndRemove(id),
});

// usecases

const {
  getItemsUseCaseMaker,
  addItemUseCaseMaker,
  getItemUseCaseMaker,
  updateItemUseCaseMaker,
  deleteItemUseCaseMaker,
} = require('../../usecases/users');

const getItemsUseCase = getItemsUseCaseMaker(User);
const addItemUseCase = addItemUseCaseMaker(User);
const getItemUseCase = getItemUseCaseMaker(User);
const updateItemUseCase = updateItemUseCaseMaker(User);
const deleteItemUseCase = deleteItemUseCaseMaker(User);

// controllers

const getItemsControllerMaker = require('./getItems');
const addItemControllerMaker = require('./addItem');
const getItemControllerMaker = require('./getItem');
const updateItemControllerMaker = require('./updateItem');
const deleteItemControllerMaker = require('./deleteItem');

const getItemsController = getItemsControllerMaker(getItemsUseCase);
const addItemController = addItemControllerMaker(addItemUseCase);
const getItemController = getItemControllerMaker(getItemUseCase);
const updateItemController = updateItemControllerMaker(updateItemUseCase);
const deleteItemController = deleteItemControllerMaker(deleteItemUseCase);

module.exports = {
  getItemsController,
  addItemController,
  getItemController,
  updateItemController,
  deleteItemController,
};