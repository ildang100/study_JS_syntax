function p(ms) {
    return new Promise(function(resolve, reject){
        setTimeout(function() {
            resolve();
        }, ms)
    })
}

// Promise

p(1000)
    .then(()=> p(1000))
    .then(()=> p(1000))
    .then(()=> p(1000))
    .then(()=> {
        console.log('4000ms 후에 실행')
    });


// async await

(async function main() {
    await p(1000);
    await p(1000);
    await p(1000);
    await p(1000);
    console.log('4000ms 후에 실행')

})();