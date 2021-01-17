function work(callback) {
    setTimeout(() => {
        const start = Date.now();
        for (let i = 0; i < 1000000000; i++) {

        }
        const end = Date.now();
        console.log(end - start + 'ms') 
        callback(end - start)
    })
}

work( ms => {
    console.log(ms)
})
console.log('다음 작업')