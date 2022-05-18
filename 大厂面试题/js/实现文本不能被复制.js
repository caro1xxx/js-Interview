// 方法1 css：
// user-select:none;

// 方法2 js:
// 直接监听body，如果想禁止一部分的话，那么就监听指导元素


// 当用户选择文本的时候会出发onselectstart事件
document.body.onselectstart = (e)=>{
    e.preventDefault();
}

// 监听copy事件

document.body.oncopy = (e) => {
    e.preventDefault();
}