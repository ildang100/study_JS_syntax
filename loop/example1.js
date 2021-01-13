for ( let i =0; i < 10; i++ ) {
    console.log(i);
}

const names = ['멍멍이', '야옹이', '멍뭉이']

for (const name in names) {
    if (names.hasOwnProperty.call(names, name)) {
        const element = names[name];
        console.log(element);
        
    }
}

const numbers = [10, 20, 30, 40, 50];

for (const number of numbers) {
    console.log(number);
}

const doggy = {
    name: '멍멍이',
    sound: '멍멍',
    age: 2
}

// console.log(Object.entries(doggy))
// console.log(Object.keys(doggy))
// console.log(Object.values(doggy))

for( let key in doggy ) {
    console.log(`${key}: ${doggy[key]}`)
}

