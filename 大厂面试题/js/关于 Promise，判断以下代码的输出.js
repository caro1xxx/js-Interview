Promise.resolve()
    .then(() => {
        //  F1
        console.log(0);
        // F2
        return Promise.resolve(4);
    })
    .then((res) => {
        console.log(res);
    });

Promise.resolve()
    .then(() => {
        // F1
        console.log(1);
    })
    .then(() => {
        // F2
        console.log(2);
    })
    .then(() => {
        // F3
        console.log(3);
    })
    .then(() => {
        // F4
        console.log(5);
    })
    .then(() => {
        // F5
        console.log(6);
    });

// 0142356