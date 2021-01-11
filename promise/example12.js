// excutor 의 resolve 함수를 실행할 때 인자를 넣어 실행하면, then 의 callback 함수의 인자로 받을 수 있다.
// resolve('hello');
// TouchEvent((message) => { ... })

function p() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('hello');
        }, 1000);
    })
}

p().then((message) => {
    console.log('1초 후에 출력 됩니다.')
    console.log('전달 받은 message = ', message)
}).catch((err) => {
    console.log(err);
})