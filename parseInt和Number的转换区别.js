// 当字符串是由数字组成的时候
let numStr = '123'
console.log(parseInt(numStr))   //123
console.log(Number(numStr))		//123

// 当字符串是由字母组成的时候 
let numStr = 'abc'
console.log(parseInt(numStr))   //NaN
console.log(Number(numStr))		//NaN

// 当字符串是由数字和字母组成的时候 
let numStr = '123a'
console.log(parseInt(numStr))   //123
console.log(Number(numStr))		//NaN

// 当字符串是由0和数字
let numStr = '0123'
console.log(parseInt(numStr))   //123
console.log(Number(numStr))		//123

// **当字符串包含小数点**
let numStr = '123.456'
console.log(parseInt(numStr))		//123
console.log(Number(numStr))			//123.456

// **当字符串为null时**
let numStr = null
console.log(parseInt(numStr))		//NaN
console.log(Number(numStr))			//0

// **当字符串为''(空)时**
let numStr = ''
console.log(parseInt(numStr))		//NaN
console.log(Number(numStr))			//0