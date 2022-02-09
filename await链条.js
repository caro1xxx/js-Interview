可以用filter和map方法接在await后面形成链条过滤和映射处理获取的数据

const foo = (await fetch('xxxxxx'))
            .filter(age=>age>20)
            .filter(name=>name != 'jack')