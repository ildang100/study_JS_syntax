// then 함수에서 다시 프로미스 객체를 리턴하는 방법을 통해 체이닝 하면, 비동기 작업을 순차적으로 아래로 표현할 수 있다.
// then 에 함수를 넣어 여러 방법을 확인한다.

function p() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve();
        }, 1000);
    })
}

p().then(()=>{
    return p();
}).then(()=>p())
.then(p)
.then(() => {
    console.log('4초후에 fulfilled 됩니다.')
})