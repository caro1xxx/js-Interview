class Person {
  sayName() {
    console.log("sayName")
    return this
  }
  getAge() {
    console.log("age")
    return this
  }
}
let person = new Person()
person.sayName().getAge()

// 这是最简单的链式调用方式，主要核心是return this 即可，但是在实际业务开发中，我们往往更多的是操作异步的情况，
// 换句话来说，我们需要上次函数执行成功之后，然后再去执行下一个函数，
// 并且需要把上次的成功的结果，带到下一次函数中去，那么上面的方法还远远达不到该目标，需要进行小改造

function getName() {
  let data = "张三"
  console.log("getName")
  return {
    status: "success",
    data
  }
}
function getAge() {
  let data = "22"
  console.log('getAge', `姓名是${arguments[0]}年龄是${data}`)
  return {
    status: "success",
    data: `姓名是${arguments[0]}年龄是${data}`
  }
}
function getClass() {
  let data = "120707"
  console.log('getClass', arguments[0] + "班级是" + data)
  return {
    status: "success",
    data
  }
}

class Chain {
  handler = []
  data = null
  setNextFn(fn) {
    if (typeof fn !== "function") {
      throw new Error("请传入函数")
    }
    this.handler.push(fn)
    return this
  }
  start() {
    for (let i = 0; i < this.handler.length; i++) {
      let fn = this.handler[i]
      if (fn) {
        let { status, data } = fn.apply(this, [this.data])
        if (status === "success") {
          this.data = data
          continue
        } else {
          break
        }
      }
    }
  }
}
let chain = new Chain()
chain.setNextFn(getName).setNextFn(getAge).setNextFn(getClass).start()

// 这种方式类似一种责任链的方式，向下传递数据。