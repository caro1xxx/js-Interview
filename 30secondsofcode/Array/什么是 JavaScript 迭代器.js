// js迭代器是ES6引入的
// 它们用于循环一系列值，通常是某种集合
// 根据定义，迭代器必须实现一个函数，
// 该函数以where是迭代序列中的下一个值next()的形式返回一个对象，并且是一个确定序列是否已被消耗的布尔值
// { value , done }


// 实现一个迭代器
class LinkedList {
    constructor(data) {
        this.data = data
    }

    [Symbol.iterator]() {
        let i = 0;
        return {
            next: () => {
                let res = this.data[i];
                i++;
                if (res) {
                    return { value: res.value, done: false };
                }
                return { value: undefined, done: true };
            }
        }
    }
}


const myList = new LinkedList([
    { id: 'a10', value: 'First' },
    { id: 'a11', value: 'Last'},
    { id: 'a12', value: 'Third'},
    { id: 'a13', value: 'Second'},
]);3

for (let item of myList) {
    console.log(item); 
    // First
    // Last
    // Third
    // Second
}