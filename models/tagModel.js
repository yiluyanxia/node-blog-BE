const mongoose = require('mongoose');

const TagSchema = mongoose.Schema({
  tagName: String,
  created: { type: Date, default: Date.now },
});

const Tag = mongoose.model('Tag', TagSchema);

module.exports = Tag;
