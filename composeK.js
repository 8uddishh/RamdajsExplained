let R = require('ramda')
let user = {
    name: 'user name',
    addressHistory: [
        { year: '2000 - 2004', state: 'tx' },
        { year: '2004 - 2008', state: 'fl' },
        { year: '2008 - 2018', state: 'mn' }
    ]
}

let getProp = propname => obj => obj[propname]
let toUpper = x => x.toUpperCase()
let chain = f => arr => {
    return arr.map(f)
}

let composeK = (f, g, h) => x => {
    //from right first method should return array
    let y = h(x)
    //map and return array
    let z = chain(g)(y)
    //map and return array
    return chain(f)(z)
}

console.log(composeK(toUpper, getProp('state'), getProp('addressHistory'))(user))
console.log(R.composeK(toUpper, getProp('state'), getProp('addressHistory'))(user))