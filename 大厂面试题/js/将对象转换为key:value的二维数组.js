// 这里只是简单的进行转换，并没有涉及到递归遍历，所以如果是嵌套的键值，那么还是只会是二维数组
function translate(obj){
    let arr = [];
    for(let i in obj){
        arr.push([i,obj[i]])
    }
    console.log(arr)
}

translate({'name':'jack','age':18})