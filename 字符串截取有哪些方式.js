1.str.substring(start, end)
返回一个新的字符串，从start到end-1的字符串，end是可选参数
2.str.substr(start, len)
截取从start开始 len长度的字符串
3.str.slice(start, end)
返回一个新的字符串，从start到end-1的字符串，end是可选参数


slice 和 substring 很类似，但后者如果传负数就当作0看待
slice可以传负数，代表从末尾开始算起的位置