function max(...args) {
    return args.reduce((acc, val) => Math.max(acc, val),0)
}

const result = max(1, 2, 3, 4, 10, 6, 7, 8)

console.log(result)