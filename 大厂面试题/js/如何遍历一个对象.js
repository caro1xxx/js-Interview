// 1.Reflect.ownKeys({a:1,b:2})
// 2.Object.keys({a:1,b:2})
// 3.object.entries()
// for in

// for of
// 主要这里要在对象中自己实现一个Symbol.iterator属性，实现for...of遍历
const obj = { a: 1, b: 2, c: 3 };

obj[Symbol.iterator] = function () {
    let i = 0;
    const keys = Object.keys(this);
    return {
        next: () => {
            return i <= keys.length - 1
                ? { value: this[keys[i++]], done: false }
                : { value: undefined, done: true };
        },
    };
};