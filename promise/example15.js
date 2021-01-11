// 보통 비동기 작업을 할 때, callback 함수를 인자로 넣어 로직이 끝나면 callback 함수를 호출한다.
// 이런 경우 함수가 아래로 진행되기 않고, callback 함수 안으로 진행된다.

function c(callback) {
    setTimeout(() => {
        callback();
    }, 1000);

}

c(() => {
    console.log(' 1초 후에 callback 함수가 실행 됩니다.');
});

c(() => {
    c(() =>{
        c(() =>{
            console.log(' 3초 후에 callback 함수가 실행 됩니다.');
        })
    })
});