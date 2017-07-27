const Article = require('../../models/articleModel.js');
const express = require('express');
const fn = () => {};

exports.addArticle = function (req,res){
  const article = {
    title: req.body.title,
    content: req.body.content,
    tag: req.body.tag,
  }
  new Article(article).save()
  res.status(200).end()
}

exports.deleteArticle = function (req,res) {
    Article.remove({_id: req.params.id}, (err, data) =>{
      if (err) {
          console.log(err)
      } else {
        res.status(200).send('succeed in deleting' + data)
      }
    })
};


exports.getArticle = function (req,res){
  const _id = req.params.id;
  Article.findOne({_id},(err,data) => {
      if (err) {
          res.send(err);
      } else {
          res.send(data);
      }
  });
};

exports.getArticleList = function (req,res){
  Article.find((err,data) => {
      if (err) {
          res.send(err);
      } else {
          res.send(data);
      }
  });
};

exports.updateArticle = function (req,res){
  const id = req.body.id
  const article ={
    title: req.body.title,
    content: req.body.content,
    tag: req.body.tag,
  }
  Article.findByIdAndUpdate(id, article, fn)
  res.status(200).end()
};
