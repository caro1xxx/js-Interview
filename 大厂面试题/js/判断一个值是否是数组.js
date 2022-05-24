const isArray = ((list)=>{ return Array.isArray(list)}) || ((list) => {return ({}).toString.call(list) === '[object Array]'})


console.log(isArray([1,'a']))
