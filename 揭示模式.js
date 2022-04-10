这里的揭示模式，准确点说应该是指 Revealing Module Pattern(揭示模块模式)

Module 模式是一种创建和结构设计模式 ，它提供了一种在生成公共 API 时封装私有成员的方法。
这是通过创建一个 IIFE来实现的，它允许我们定义仅在其范围内可用的变量（通过闭包 ），同时返回包含公共 API 的对象

var Module = (function () {
  var privateData = "private";
  // 共有属性
  this.commonData = "common";
  // 返回公共API对象
  return {
    getPrivateData: function () {
      return privateData;
    },
    changPrivateData: function (val) {
      privateData = val;
    },
  };
})();

Revealing Module 模式是 Module 模式中的变体。关键区别在于所有成员（私有和公共）都在闭包中定义，返回值是不包含函数定义的对象文字，
并且对成员数据的所有引用都是通过直接引用而不是通过返回的对象完成的。揭示模式的这种变化用于将构造函数与方法分开

var RevealingModule = (function () {
  var privateData = "private";
  // 共有属性
  this.commonData = "common";
  var getPrivateData = function () {
    return privateData;
  };
  var changPrivateData = function (val) {
    privateData = val;
  };

  // 返回一个匿名对象，它拥有指向私有函数的指针，该函数是展示为共有的方法
  return {
    getData: getData,
    changData: changData,
  };
})();


在我看来两者的区别点就在于，模块模式将公共API的实现细节直接返回，
而揭示模块模式将公共API的实现细节封装在了闭包内，只暴露了引用的API的指针

模块模式优点：
  实现代码的封装模块化
  实现私有化变量和方法

模块模式缺点：
  无法应用私有变量，造成无法对私有变量进行单元测试
  要修改内部成员的可见性时需要改变每一个曾经使用过该成员的地方