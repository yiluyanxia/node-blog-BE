const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
  userEmail:String,
  userPwd:String,
  created: { type: Date, default: Date.now },
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
