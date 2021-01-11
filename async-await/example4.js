// async function 에서 return 되는 값은
// Promise.resolve 함수로 감싸서 리턴 된다.

function p(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // resolve(ms);
            reject(new Error('Reason'));
        }, ms)
    })
}

async function asyncP() {
    return 'Mark';
}

(async function main() {
    try {
        const ms = await asyncP(1000);
        console.log(ms)
    } catch (err) {
        console.log(err);
    }
})();