// 题目
function foo() {
    console.log(this);
}

// foo.call(3)

// 在非严格模式下
// output: [Number:3]
// 在非严格模式下，要绑定this指定为null或undefined会自动替换为全局对象，**如果是指定为原始值那么则会被包装**,引用值的话不做任何操作
// foo.call(undefined) 输出global
foo.call({name:'jack'})


// 严格模式下
// output: 3