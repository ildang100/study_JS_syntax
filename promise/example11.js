// 마찬가지로 프로미스 객체가 rejected 되는 시점에 p.catch 안에 설정한 callback 함수가 실행된다.

function p() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject();
        }, 1000)
    })
}

p().then(() => {
    console.log('출력안됨')
}).catch(err =>{
    console.log('1초 뒤 error 발생')
    console.log('err = ',err);
})