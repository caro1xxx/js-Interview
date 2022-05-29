// 即Symbol.asyncIterator
// Symbol.asyncIterator 符号指定了一个对象的默认异步迭代器。
// 如果一个对象设置了这个属性，它就是异步可迭代对象，可用于for await...of循环。

// Symbol.asyncIterator 是一个用于访问对象的@@asyncIterator方法的内建符号。一个异步可迭代对象必须要有Symbol.asyncIterator属性

// 自定义异步可迭代对象

const myAsyncIterable = {};
                                        //异步函数 并且是Generator
myAsyncIterable[Symbol.asyncIterator] = async function *(){
    yield 'hello'
    yield 'async'
    yield 'iterable'
}

async function asy(){
    for await (const x of myAsyncIterable){
        console.log(x)
    }
}

asy()

// 截止2022-05-29目前还有默认自带Symbol.asyncIterator的js内建对象