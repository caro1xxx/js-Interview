// 模块，（Module），是能够单独命名并独立地完成一定功能的-
// 程序语句的集合（即程序代码和数据结构的集合体）

// 为什么需要模块化
1.代码抽象
2.代码封装
3.代码复用
4.依赖管理


// JavaScript程序模块化分类
CommonJs (典型代表：node.js早期)
AMD (典型代表：require.js)
CMD (典型代表：sea.js)


AMD:即异步模块定义,采用异步方式加载模块,所有依赖模块的语句都定义在
一个回调函数中,等到模块加载完毕,回调函数运行
// 首先用config()指定各模块路径和引用名
require.config({
  baseUrl: "js/lib",
  paths: {
    "jquery": "jquery.min",  //实际路径为js/lib/jquery.min.js
    "underscore": "underscore.min",
  }
});
// 执行基本操作
require(["jquery","underscore"],function($,_){
  // some code here
});


CommonJS:用于服务端
// a.js
module.exports={ foo , bar}

// b.js
const { foo,bar } = require('./a.js')



ESM:ES6设计思想是尽量的静态化
// ES6模块
import { stat, exists, readFile } from 'fs';
// ES6 可以在编译时就完成模块加载

ESM中自动采用严格模式
// export
// import

动态加载
// 将import()作为函数调用，将其作为参数传递给模块的路径。
// 它返回一个 promise
import('/modules/myModule.mjs')
  .then((module) => {
    // Do something with the module.
  });