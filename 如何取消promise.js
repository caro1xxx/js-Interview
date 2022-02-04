取消/中断promise
Promise/A+标准:原promise对象的状态将跟新对象保持一致

Promise.resolve().then(()=>{
  console.log('ok');
  return new Promise(()=>{}) //返回"pending"状态的promise对象
}).then(()=>{
  // 后续的函数不再被执行
  console.log(2);
})