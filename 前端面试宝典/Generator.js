// 返回一个遍历器对象,可以一次比那里generator内部的每一个状态

// 两个特征
1.function关键和函数名中间有一个星号
2.函数体内部使用yield表达式,定义不同的内部状态

function *foo(){
  yield 'hello';
  yield 'world';
  return 'end'
}

// 既然generator函数返回一个遍历器对象,
// 那么它一定具有Symbol.iterator数学,并且返回给自己

// yield关键字可以暂停generator函数返回的遍历器对象的状态

function* helloWorldGenerator() {
  yield 'hello';
  yield 'world';
  return 'ending';
}
var hw = helloWorldGenerator();
// 上述存在三个状态：hello、world、return

// 通过next方法才会遍历到下一个内部状态

// 执行顺序
1.遇到yield表达式,将该yield表达式后面的值最为返回的对象的value,并且暂停后面的执行
2.下次调用next()方法,继续往下执行,知道遇到yield后重复第一步
,如果一直没有遇到yield那么将一直执行,知道遇到下一个yield或者return为止
3.如果改函数没有return语句,则返回的对象的value位undefined
gen.next()
// { value: 'hello', done: false }
gen.next()
// { value: 'world', done: false }
gen.next()
// { value: 'ending', done: true }
gen.next()
// { value: undefined, done: true }


注意
yield表达式本身没有返回值,或者说总是返回undefined
通过调用next方法可以带一个参数,该参数就会被当作上一个yield表达式的返回值


异步处理

// yield表达式可以暂停函数执行，next方法用于恢复函数执行，这使得Generator函数非常适合将异步任务同步化
const gen = function* () {
  const f1 = yield readFile('/etc/fstab');
  const f2 = yield readFile('/etc/shells');
  console.log(f1.toString());
  console.log(f2.toString());
};


Generator + async/await
// async实质是Generator的语法糖，相当于会自动执行Generator函数
const asyncReadFile = async function () {
  const f1 = await readFile('/etc/fstab');
  const f2 = await readFile('/etc/shells');
  console.log(f1.toString());
  console.log(f2.toString());
};

