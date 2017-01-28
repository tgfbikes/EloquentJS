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

//console.log(flattenedArray)

// Mother-child age difference
let byName = {}
ancestryData.forEach((person) => byName[person.name] = person)

function averageOfItemsInArray (someArray) {
	return someArray.reduce((val1, val2) => val1 + val2) / someArray.length
}

let totalMatches = 0
let mothersAgeArray = []

ancestryData.forEach((person) => {
	if (byName[person.mother]) {
		totalMatches++
		let mother = byName[person.mother]
		let mothersAgeWhenChildWasBorn = person.born - mother.born

		mothersAgeArray.push(mothersAgeWhenChildWasBorn)
	}
})

console.log(averageOfItemsInArray(mothersAgeArray))

