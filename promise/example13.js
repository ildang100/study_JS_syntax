// 마찬가지로, excutor 의 reject 함수를 실행할 때 인자를 넣어 실행하면, catch 의 callback 함수의 인자로 받을 수 있다.
// reject('error');
// catch((err) =>{ ... });

function p() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(new Error('bad'));
        }, 1000)
    })
}

p().then(() => {

}).catch((err) => {
    console.log('1초 후 error 가 발생합니다.')
    console.log('err >', err);
})