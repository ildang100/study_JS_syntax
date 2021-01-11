// fulfilled 되거나 rejected 된 후에 최종적으로 실행할 것이 있다면, .finally() 를 설정하고, 함수를 인자로 넣을수있다.

function p() {
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            resolve();
        }, 1000)
    })
}

p().then((res) => {
    console.log('1초 후 출력')
}).catch((err) => {
    console.log(err);
}).finally(() => {
    console.log('fulfilled 와 rejected 상관없이 finally가 작동 합니다.')
})