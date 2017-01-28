'use strict'

let ancestryData = require('./ancestry.js')

// Flatteniing
let arrayOfarrays = [
	[1, 2, 3, 4],
	[5, 6],
	[7],
	[8, 9]
]

let flattenedArray = arrayOfarrays.reduce((array1, array2) => array1.concat(array2))

console.log(flattenedArray)

// Mother-child age difference
console.log(ancestryData)