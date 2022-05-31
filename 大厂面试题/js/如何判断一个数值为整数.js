// ES6
Number.isInteger(2)

// ES5 poilfll
if(Number.isInteger){
    Number.isInteger = function (num) {
        // 即如果num的类型为Number 并且 模1==0那么就是整数
        return typeof num == 'Number' && num % 1 == 0
    }
}