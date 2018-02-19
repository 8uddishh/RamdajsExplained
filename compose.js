let R = require('ramda')


let square = x => x*x
let double = x => 2*x
let incr = x => x + 1


// using vanilla js -- What is compose
let compose = (f, g, h) => x => f(g(h(x)))
console.log('Composed output', compose(square, incr, double)(10))

// Using Ramda
console.log('Composed ramda output', R.compose(square, R.add(1), R.multiply(2))(10))

console.log('Array as input', R.compose(
    R.map(square),
    R.map(R.add(1)),
    R.map(R.multiply(2))
)([5, 10, 15]))

//else 
console.log('Array as input alternate', R.map(
    R.compose(square, R.add(1), R.multiply(2))
)([5, 10, 15]))