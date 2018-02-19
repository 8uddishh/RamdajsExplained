let R = require('ramda')

// using vanillajs
let append = (arr1) => (arr2) => arr2.concat(arr1)
let double = (arr1) => arr1.map( x => 2*x )
let head = (arr) => [arr[0]]

let chain = (f, g) => arr => {
    let yarr = g(arr)
    return f(yarr)(arr)
}

console.log(chain(
    append,
    double
)([10, 15, 20]))
console.log(R.chain(append, double)([10, 15, 20]))

console.log(chain(
    append,
    head
)([10, 15, 20]))
console.log(R.chain(append, head)([10, 15, 20]))





