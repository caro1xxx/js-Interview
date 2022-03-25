function foo(arr) {
	arr = arr || []
	if (arr.length >= 5) {
		return arr
	}
	var n = 2 + Math.floor(Math.random() * 31)
	if (arr.indexOf(n) == -1) {
		arr.push(n)
	}
	return foo(arr)
}


let arr1 =[];
console.log(foo(arr1));