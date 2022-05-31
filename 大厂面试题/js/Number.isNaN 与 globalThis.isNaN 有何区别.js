Number.isNaN('NaN') // false
Number.isNaN(NaN)  //true
isNaN('NaN') //true
isNaN(NaN) //true
isNaN('1') //false

// 区别在于this.isNaN会对字符串的NaN进行转换，即如果是字符串的NaN也会被认定为NaN