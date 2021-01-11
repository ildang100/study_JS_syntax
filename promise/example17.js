// vaule 가 프로미스 객체인지 아닌지 알 수 없는 경우, 사용하면 연결 된 then 메서드를 실행 한다.
// value 가 프로미스 객체면, resolve 된 then 메서드를 실행한다.
// value 가 프로미스 객체가 아니면, value 를 인자로 보내면서 then 메서드를 실행한다.

Promise.resolve(/* value */);

Promise.resolve(new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('foo')
    }, 1000)
})).then((message) => {
    console.log('1초 후 실행 ', message)
})


Promise.resolve('bar').then((message) => {
    console.log('message >', message)
})