let R = require('ramda')

let triangleMetrics = (length, breadth, hypotenuse) => ({
    perimeter: length + breadth + hypotenuse,
    area: 0.5*length*breadth,
    hypotenuse: hypotenuse
})

let hypotenuse = dimension => Math.hypot(dimension.length, dimension.breadth)

// using vanilla js -- what is converge
let converge = (f, g) => x => {
    let arr = g.map(gi => gi(x))
    return f(...arr)
}

console.log(converge(triangleMetrics,
[R.prop('length'),
R.prop('breadth'),
hypotenuse])({length: 3, breadth: 4 }))


//using ramda
console.log(R.converge(triangleMetrics,
[
    R.prop('length'),
    R.prop('breadth'),
    hypotenuse
])({length: 3, breadth: 4 }))