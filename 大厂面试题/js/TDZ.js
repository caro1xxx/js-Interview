// 题目1
var a = 3;
let a;

// 这里会报错，因为a的定义被后面的let定义，但是var在let之前定义a，导致出现TDZ



// 题目2
var x = 3;

function foo(x = x){
    // ..
}

foo();

// 这里也是TDZ错误，因为参数x=x形成一个单独作用域
// 在这个单独作用域中执行的是let x=x 形成TDZ


// 形成TDZ的原因，在let/const定义之前使用变量