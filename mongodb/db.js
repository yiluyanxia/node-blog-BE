const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://127.0.0.1/node-blog')

const db = mongoose.connection;

db.once('error',() => console.log('Mongo connection error'));

db.once('open', function () {
  console.log('The database has connected.')
})

export default db;
