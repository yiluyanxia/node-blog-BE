const Tag = require('../../models/tagModel.js');
const express = require('express');
const fn = () => {};

exports.addTag = function (req,res){
  console.log(req.body);
  const tag ={
    tagName: req.body.tagName,
  }
  new Tag(tag).save()
  res.status(200).end()
};

exports.getTagList = function (req,res){
  Tag.find((err,data) => {
      if (err) {
          res.send(err);
      } else {
          res.send(data);
      }
  });
};

exports.getTag = function (req,res){
  const _id = req.params.id;
  console.log(_id);
  Tag.findOne({_id: req.params.id},(err,data) => {
      if (err) {
          res.send(err);
      } else {
          res.send(data);
          console.log(data);
      }
  });
};

exports.deleteTag = function (req,res) {
    Tag.remove({_id: req.params.id}, (err,data) =>{
      if (err) {
          console.log(err)
      } else {
        res.status(200).send('succeed in deleting ---' + data)
      }
    })
};

exports.updateTag = function (req,res){
  const id = req.body.id
  const tag ={
    tagName: req.body.tagName,
  }
  Tag.findByIdAndUpdate(id, tag, fn)
  res.status(200).end()
};

// router.delete('/api/deleteBerth/:id', requireLogin, (req, res) => {
//     models.Berth.remove({_id: req.params.id}, (err, data) => {
//         if (err) {
//             console.log(err)
//         } else {
//           res.status(200).send('succeed in deleting ---' + data)
//         }
//     })
//
// })
