let R = require('ramda')

class Tour {
    constructor (...stops) {
        this.stops = stops
    }
    summary () {
        return R.join('\n', R.map(spot => `Will stop at ${spot}`)(this.stops))
    }
}

// vanilla js no currying (since cunstructor do not return)
let flPackage = new Tour('Walt Disney World', 'Universal\'s Island of Adventure', 'Florida Keys', 'Epcot')
console.log(flPackage.summary())

// currying involed using ramda
let deluxePackage = R.constructN(4, Tour) // 4 stops within a tour
let floridaPackage = deluxePackage('Walt Disney World')('Universal\'s Island of Adventure')('Florida Keys')('Epcot')

console.log(floridaPackage.summary())