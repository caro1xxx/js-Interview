// falsy value:false,null,0,'',"",undefined,NaN



function compact(array){
    // let x = new Boolean('')  x的值为false,这里主要是通过Boolean来对array内每个值进行判断
    return array.filter(Boolean);
}

console.log(compact([1,0,null,2,'',undefined,3,'a']))