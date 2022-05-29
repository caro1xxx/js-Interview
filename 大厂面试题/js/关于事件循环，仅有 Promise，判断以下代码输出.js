                        // F1
Promise.resolve(console.log(0))
    .then(() => {
        // F2
        console.log(1);
                            // F2
        Promise.resolve(console.log(5))
                            // F3
            .then(() => console.log(3))
                            // F4
            .then(() => console.log(4))
                            // F5
            .then(() => console.log(6));
    })
                // F3
    .then(() => console.log(2))
                // F4
    .then(() => console.log(7));

// 01532476