"use strict";

// 实现与MySQL交互
var mysql = require('mysql');
var config = require('../common/config.js');

// 这种写法太挫了吧。。。
var $sql = require('./userSqlMapping');

module.exports = {
  add: function (req, res, next) {
    var param = req.query || req.params;
    var connection = mysql.createConnection(config.mysql);
    connection.connect();
    connection.query($sql.insert,[param.id, param.name],function(err,rows,fields){
      if(err){
        res.json({
          code:'1',
          msg: '操作失败'
        });
        throw err;

      }
      res.json({
        code:200,
        msg:"增加成功"
      });

    });

    connection.end();

  }
};