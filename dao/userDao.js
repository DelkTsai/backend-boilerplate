"use strict";

// 实现与MySQL交互
var mysql = require('mysql');
var config = require('../common/config.js');
var $sql = require('./userSqlMapping');

var _ = require('lodash');

// 使用连接池，提升性能
var pool  = mysql.createPool(_.extend({}, config.mysql));


module.exports = {
  add: function (req, res, next) {
    pool.getConnection(function(err, connection) {
      // 获取前台页面传过来的参数
      var param = req.query || req.params;

      // 建立连接，向表中插入值
      // 'INSERT INTO user(id, name, age) VALUES(0,?,?)',
      connection.query($sql.insert, [param.id, param.name], function(err, result) {
        if(result) {
          result = {
            code: 200,
            msg:'增加成功'
          };
        }

        // 以json形式，把操作结果返回给前台页面
        if(typeof result === 'undefined') {
          res.json({
            code:'1',
            msg: '操作失败'
          });
        } else {
          res.json(result);
        }



        // 释放连接
        connection.release();
      });
    });
  }
};