const superHeroes = ['아이언맨', '캡틴 아메리카', '토르', '닥터 스트레인지']

superHeroes.forEach(element => {
    console.log(element)
});


const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const squared = []

numbers.forEach(number => {
    squared.push(number * number)
})

console.log(squared)


const newSquare = n => n * n

const newSquared = numbers.map(newSquare)

console.log('newSquared >', newSquared)