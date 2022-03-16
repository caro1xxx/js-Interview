** 不要写同步的暂停函数,它会让你的程序卡死 **
同步实现:
  function sleep(d){
    for(var t = Date.now();Date.now() - t <= d;);
  }
写一个异步的暂停函数，这样可以在任何 async function 中暂停，且只暂停这一部分代码
异步实现:
  function sleep(milliseconds) {
      return new Promise(resolve =>
          setTimeout(resolve, milliseconds))
  }
  void async function main() {
      // … do something …
      await sleep(5000)
      // … do something else …
  }()