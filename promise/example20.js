// 프로미스 객체 여러개를 생성하여, 배열로 만들어 인자호 넣고 Promise.race 를 실행하면,
// 배열의 모든 프로미스 객체들 중 가장 먼저 fulfilled 된 것으로, then 의 함수가 실행된다.
// then 의 함수의 인자로 가장 먼저 fulfilled 된 프로미스 객체의 resolve 인자값을 돌려준다.

// Promise.race([프로미스 객체들]);

function p(ms) {
    return new Promise(function(resolve, reject){
        setTimeout(() => {
            resolve(ms);
        }, 1000)
    })
}

Promise.race([p(1000), p(2000), p(3000)]).then(message => {
    console.log('가장 빠른 하나가 fullfilled 된 이후에 실행 됩니다.', message);
})