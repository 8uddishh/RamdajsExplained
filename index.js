let R = require('ramda')

const decr = R.subtract(R.__, 1)
let ans001 = decr(decr(15))
console.log('Ans 001', ans001)

const decr1 = R.subtract(1)
let ans002 = decr1(decr1(15))
console.log('Ans 002', ans002)

const double = R.multiply(2)
let ans003 = R.map(double, [1, 2, 3, 4, 5, 6, 7, 8, 9, 0])
console.log('Ans 003', ans003)

const idxPlusValue = (val, idx) => `${idx}-${val}`
let ans004 = R.addIndex(R.map)(idxPlusValue)([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])
console.log('Ans 004', ans004)

let ans005 = R.adjust(R.subtract(R.__, 10))(4)([100, 200, 300, 400, 500, 600, 700, 800, 900, 000])
console.log('Ans 005', ans005)

const containssaurus = str => str.includes('saurus')
const containsraptor = str => str.includes('raptor')
const containssaurusorraptor = R.anyPass([containssaurus, containsraptor])
let ans006 = R.all(containssaurus)(['Tyrannasaurus Rex', 'Spinosaurus', 'Velociraptor', 'Smiladon'])
console.log('Ans 006', ans006)
let ans007 = R.all(containssaurusorraptor)(['Tyrannasaurus Rex', 'Spinosaurus', 'Velociraptor'])
console.log('Ans 007', ans007)

const spawnMore = {
    name: 'Senthil',
    number: 5
}
let ans008 = R.compose(
    R.map(x => x.name), 
    R.ap(R.repeat, x => x.number)
)(spawnMore)
console.log('Ans 008', ans008)

//also
let ans009 = R.ap(
    R.pipe(
        R.prop('name'),
        R.repeat
    ),
    R.prop('number')
)(spawnMore)
console.log('Ans 009', ans009)

let ans010 = R.aperture(3, [1,2,3,4,5,6,7,8,9,10,11,12])
console.log('Ans 010', ans010)

let ans011 = R.append({ name: 'xx', age: 22 })([
    {name: 'yy', age: 23},
    {name: 'zz', age: 24},
    {name: 'aa', age: 25},
    {name: 'bb', age: 26}
])
console.log('Ans 011', ans011)

let ans012 = R.prepend({ name: 'xx', age: 22 })([
    {name: 'yy', age: 23},
    {name: 'zz', age: 24},
    {name: 'aa', age: 25},
    {name: 'bb', age: 26}
])
console.log('Ans 012', ans012)

const reducer = (...arr) => arr.reduce((curr, next) => `${curr}-${next}`)
let ans013 = R.apply(reducer, ['Sen', 'Ben', 'Ken', 'Den', 'Men'])
console.log('Ans 013', ans013)

const reverseReducer = arr => arr.reduce((curr, next) => `${next}-${curr}`)
let ans014 = R.unapply(reverseReducer)('Sen', 'Ben', 'Ken', 'Den', 'Men')
console.log('Ans 014', ans014)

let ans015 = R.applySpec({
    name: R.pipe(
        R.prop('name'),
        R.toUpper
    ),
    salarypermonth: R.prop('salarypermonth'),
    salaryperyear: R.compose(
        R.multiply(R.__, 12),
        R.prop('salarypermonth')     
    )
})({ name: 'senthilkumar', salarypermonth: 6000 })
console.log(ans015)

let byAge = R.ascend(R.prop('age'))
let ans016 = R.sort(byAge)([
    { name: 'Senthil', age: 35 },
    { name: 'Saamy', age: 33 }
])
console.log(ans016)

let takes3Args = (a, b, c=10) => [ a, b, c ]
let ans017 = R.binary(takes3Args)(2, 5)
console.log(ans017)

let ans018 = R.clone({ name: 'senthil '})
console.log(ans018)

let ans019 = R.comparator((a,b)=> a.age < b.age)({ name: 'Senthil', age: 35 },{ name: 'Saamy', age: 33 })
console.log(ans019)

let somethingWeird = (x,y,z)=> {
    return x * y * z
}
var average = R.converge(somethingWeird, [x => x[3], R.sum, R.length ])
console.log(average([1, 2, 3, 4, 5, 6, 7]))