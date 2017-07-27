const mongoose = require('mongoose');

const ArticleSchema = mongoose.Schema({
  title: String,
  content: String,
  tag: String,
  created: { type: Date, default: Date.now },
});

const Article = mongoose.model('Article', ArticleSchema);

module.exports = Article;
