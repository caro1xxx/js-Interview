// any即和all相反
// 定义:数组内只要有个promise是成功的那么，这个promise数组就是成功的，如果这个数组所有promise都是失败的，那么这个数组就是失败的

Promise.any = function(promiseArray){
    return new Promise((resovle,reject)=>{
        let _promiseArray = Array.from(promiseArray);
        let length = _promiseArray.length;
        let rejectPromise= [];
        _promiseArray.forEach((resolve,reject)=>{
            Promise.resolve(item).then(
                (val)=>{resolve(val)},
                (reason)=>{
                    rejectPromise.push(reason)
                    if(rejectPromise.length === length){
                        reject(new AggregateError(rejectPromise))
                    }
                }
            )
        })
    })
}