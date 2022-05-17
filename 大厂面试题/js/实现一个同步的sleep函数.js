// 定义：setTimeout等函数是异步的，是宏任务，导致同步任务执行完后setTimeout才执行完毕

// 实现

function sleep(t=1000){
    console.log('start');
    let startTime = +(new Date());
    let currentTime = startTime;
    while(currentTime - startTime >= t){
        currentTime = +(new Date())
    }
    console.log('end')
}

sleep(3000);
console.log('hi')


// output
// start
// 3000ms之后
// end
// hi