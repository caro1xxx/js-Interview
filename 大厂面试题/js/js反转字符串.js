                                    //这里的reverse()方法是数组的方法，字符串是没有内置reverse()方法的
const reverse = (str)=> str.split('').reverse().join('');

console.log(reverse('abc'))