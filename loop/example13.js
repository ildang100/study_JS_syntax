const numbers = [10, 20, 30, 40, 50, 60, 70, 80];

const sum = numbers.reduce( (sum, number, index, array) => {
    if ( index === array.length-1 ) {
        return (sum + number) / array.length;
    }
    return sum + number;
}, 0);

console.log(sum);