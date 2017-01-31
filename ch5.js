'use strict'

let ancestryData = require('./ancestry.js')
let byName = {}

ancestryData.forEach((person) => byName[person.name] = person)

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

// Historical life expectancy
function groupByAges (someArray) {
	let groupsOfAges = {}

	someArray.forEach(function (person) {
		let propName = Math.ceil(person.died / 100)

		if (groupsOfAges[propName]) {
			groupsOfAges[propName].push(person.died - person.born)
		} else {
			groupsOfAges[propName] = []
			groupsOfAges[propName].push(person.died - person.born)
		}
	})

	return groupsOfAges
}

let averageAgesPerCentury = groupByAges(ancestryData)

for (let key in averageAgesPerCentury) {
	let array = averageAgesPerCentury[key]

	averageAgesPerCentury[key] = array.reduce((a, b) => a + b) / array.length
}

console.log(averageAgesPerCentury)


// Every and then some
function every (someArray, predicateFunc) {
	for (let i = 0; i < someArray.length; i++) {
		if (!predicateFunc(someArray[i])) return false
	}
	return true
}

function some (someArray, predicateFunc) {
	for (let i = 0; i < someArray.length; i++) {
		if (predicateFunc(someArray[i])) return true
	}
	return false
}

let testArray1 = [10, 20, 5, 15]
let testArray2 = [3, 4, 6, 50]
let testFunc = (element) => element % 5 === 0

console.log(every(testArray1, testFunc))
console.log(some(testArray2, testFunc))









