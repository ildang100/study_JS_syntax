// 숫자로 이루어진 배열이 주어졌을 때, 해당 숫자 배열안에 들어있는 숫자 중 3보다 큰 숫자로만 이루어진 배열을 새로 만들어서 반환해보세요.

function getArray(number, numbers) {
    let arr = [];
    
    for( let i = 0; i < numbers.length; i ++ ) {
        if( numbers[i] > number ) {
            arr.push(numbers[i])
        }
    }
    return arr;
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const results = getArray(3, numbers)
console.log(results)