// then 을 설정하는 실점을 정확히하고, 함수의 실행과 동시에 프로미스 객체를 만들면서 peding 이 시작하도록 하기 위해
// 프로미스 객체를 생성하면서 리턴하는 함수 (p) 를 만들어 함수 (p) 실행과 동시에  then 을 설정 한다.

function p() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve();
        }, 1000)
    })
}

p().then((res) => {
    console.log('1초후 실행')
}).catch((err) => {
    console.log('error')
})