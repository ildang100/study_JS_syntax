const alphabets = ['a', 'a', 'a', 'a', 'a', 'a', 'a', 'b', 'c', 'c', 'd', 'd','e']

alphabets.reduce((acc, curr) => {
    if (acc[curr]) {
        acc[curr] += 1
    } else {
        acc[curr] = 1
    }
    return acc;
}, {})

console.log(alphabets)