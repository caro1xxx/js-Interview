[].__proto__:指向Array.prototype
Array.prototype:本身也是个对象 所以又指向Object.prototype
[].__proto__.__proto__ === Object.prototype

{}.__proto__:指向Object.prototype


[].__proto__.__proto__ === {}.__proto__  //true