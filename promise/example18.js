// Promise.reject 를 사용하면, catch 로 연결 된 rejected 상태로 변경 된다.

Promise.reject(/* value*/);

Promise.reject(new Error('reason')).then((message) => {

}).catch((error) => {
    console.log(error);
})

