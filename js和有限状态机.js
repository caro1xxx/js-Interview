有限状态机:
Finite-state machine(FSM)是一个非常有用的模型，可以模拟世界上大部分事物

有三个特征
  状态总数(state)是有限的
  任一时刻，只处在一种状态之中
  某种条件下，会从一种状态转变（transition）到另一种状态

例子:
  如红绿灯,在同一时刻只会出现一种颜色,并且一共只有三个颜色,有限
  在固定时间后,会从另种颜色变换成另一种

在js中的实现
　　var menu = {
　　    
  　　　　// 当前状态
  　　　　currentState: 'hide',
  　　
  　　　　// 绑定事件
  　　　　initialize: function() {
  　　　　　　var self = this;
  　　　　　　self.on("hover", self.transition);
  　　　　},
  　　
  　　　　// 状态转换
  　　　　transition: function(event){
  　　　　　　switch(this.currentState) {
  　　　　　　　　case "hide":
  　　　　　　　　　　this.currentState = 'show';
  　　　　　　　　　　doSomething();
  　　　　　　　　　　break;
  　　　　　　　　case "show":
  　　　　　　　　　　this.currentState = 'hide';
  　　　　　　　　　　doSomething();
  　　　　　　　　　　break;
  　　　　　　　　default:
  　　　　　　　　　　console.log('Invalid State!');
  　　　　　　　　　　break;
  　　　　　　}
  　　　　}
  　　
  　　};

安装库:Javascript Finite State Machine
url:https://github.com/jakesgordon/javascript-state-machine