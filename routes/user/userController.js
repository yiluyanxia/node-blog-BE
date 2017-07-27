const User = require('../../models/userModel.js');
const express = require('express');
const fn = () => {};

exports.reg = function (req,res){
  console.log(req.body);
  const user ={
    userEmail: req.body.userEmail,
    userPwd: req.body.userPwd
  }
  new User(user).save()
  res.status(200).end()
};

exports.login = function(req,res){
  const userEmail = req.body.userEmail
  const userPwd = req.body.userPwd
  // const {userEmail,userPwd} = req.body
  User.findOne({userEmail},'userPwd',(err, doc) => {
    switch (true) {
      case !!err:
        console.log(err);
        break;
      case !doc:
        res.send({state:0, msg:'账号不存在'})
        break;
      case doc.userPwd === userPwd:
        res.send({state:1, msg:'登陆成功'})
        break;
      case doc.userPwd != userPwd:
        res.send({state: 2, msg: '密码错误'})
        break;
      default:
      res.send({state: 3, msg: '未知错误'})
    }
  })
}
