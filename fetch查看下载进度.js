let reader = null

fetch('xxxx')
    .then(res=>{
        // getReader()返回一个promise
        reader = res.body.getReader()
    })
    .then(res=>{
        //reader的read方法可以获取到reader内部的下载blob
        // done代表是否完成，value代表以及传输的blob
        let {done,value} = reader.read()
    })



    // done: false
    // value: Uint8Array(685)
    // [0 … 99]
    // [100 … 199]
    // [200 … 299]
    // [300 … 399]
    // [400 … 499]
    // [500 … 599]
    // [600 … 684]
    // buffer: 
    // ArrayBuffer(685)
    