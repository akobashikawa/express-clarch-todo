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

const UserMaker = require('./User');

const User = UserMaker({
  getItems: () => UserModel.find(),
  addItem: ({name}) => {
    const user = new UserModel({name});
    return user.save();
  },
});

module.exports = { User };