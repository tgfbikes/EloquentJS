

(function () {

	// The sum of a range
	function range (start, end) {
		let rangeOfNumbers = []
		for (let i = start; i <= end; i++) {
			rangeOfNumbers.push(i)
		}
		return rangeOfNumbers
	}

	console.log('Result for range function:', range(1, 10))

	function sum (someArray) {
		let total = 0
		for (let i = 0; i <= someArray.length - 1; i++) {
			total += someArray[i]
		}
		return total
	}

	console.log('Result for sum function:', sum(range(1, 10)))

	function modifiedRange (start, end, step = 1) {
		let rangeOfNumbers = []

		if (end >= start) {
			for (let i = start; i <= end; i += step) {
				rangeOfNumbers.push(i)
			}
		} else if (start >= end) {
			for (let i = start; i >= end; i += step) {
				rangeOfNumbers.push(i)
			}
		}

		return rangeOfNumbers
	}

	console.log('Result for modifiedRange function (args: 1, 10, 2):', modifiedRange(1, 10, 2))
	console.log('Result for modifiedRange function (args: 5, 2, -1):', modifiedRange(5, 2, -1))

	// Reversing an array
	let noChange = [1, 2, 3, 4, 5, 6, 7]
	let change = [1, 2, 3, 4, 5, 6, 7]

	function reverseArray (someArray) {
		let newArray = []

		for (let i = someArray.length; i > 0; i--) {
			newArray.push(i)
		}

		return newArray
	}

	let noChangeResult = reverseArray(noChange)
	console.log('Result for reverseArray function: newArray:', noChangeResult, 'original array:', noChange)

	function reverseArrayInPlace (someArray) {
		let length = someArray.length - 1
		for (let i = 0; i < someArray.length / 2; i++) {
			let a = someArray[i]
			let b = someArray[length]
			someArray[i] = b
			someArray[length] = a
			length--
		}

		return someArray
	}

	console.log('Result for reverseArrayInPlace function:', 'original array:', reverseArrayInPlace(change))

	// A list
	function arrayToList (someArray) {
		let list = null

		for (let i = someArray.length; i > 0; i--) {
			// list = {
			// 	value: i,
			// 	rest: list || null
			// }
			list = prepend({value: i}, list)
		}

		return list
	}

	console.log('Result for arrayToList function:', arrayToList([1, 2, 3]))

	let list = {
		value: 1,
		rest: {
			value: 2,
			rest: {
				value: 3,
				rest: null
			}
		}
	}


	function listToArray (someList, newArray) {
		newArray.push(someList.value)
		if (someList.rest === null) return newArray
		return listToArray(someList.rest, newArray)
	}

	console.log('Result for listToArray function:', listToArray(list, []))

	function prepend (element, someList) {
		element.rest = someList || null
		return element
	}
	console.log('Result for arrayToList using prepend helper function:', prepend({value: 22}, list))

	function nth (list, num, count) {
		if (!list) return null
		if (list && count === num) return list
		count++
		return nth(list.rest, num, count)
	}

	console.log('Result for nth (args (list, 2)):', nth(list, 2, 0))
	console.log('Result for nth (args (list, 4)):', nth(list, 4, 0))

	// Deep comparison
	function deepEqual (val1, val2) {
		if (val1 === val2) return true

		if (typeof val1 != 'object' || typeof val2 != 'object' || val1 === null || val2 === null) {
			return false
		}

		let keysInA = 0
		let keysInB = 0

		for (let key in val1) {
			keysInA += 1
		}

		for (let key in val2) {
			keysInB += 1

			if (!(val1.hasOwnProperty(key)) || !deepEqual(val1[key], val2[key])) {
				return false
			}
		}

		return keysInA == keysInB
	}

	let hello = function () {}

	let hi = hello

	let obj1 = {
		aKey: 1,
		anotherNumber: 2,
		anotherObj: {
			aKey: 2,
			something: true,
			anotherObj: {
				aString: 'some string'
			}
		}
	}

	let obj2 = {
		aKey: 1,
		anotherNumber: 2,
		anotherObj: {
			aKey: 2,
			something: true,
			anotherObj: {
				aString: 'some different string'
			}
		}
	}

	let obj3 = {
		aKey: 1,
		anotherNumber: 2,
		anotherObj: {
			aKey: 2,
			something: true,
			anotherObj: {
				aString: 'some string'
			}
		}
	}

	console.log('deepEqual results:')
	console.log(deepEqual(1, 2))
	console.log(deepEqual(1, '1'))
	console.log(deepEqual('1', '1'))
	console.log(deepEqual(1, 1))
	console.log(deepEqual({}, 1))
	console.log(deepEqual(null, 1))
	console.log(deepEqual(()=>{},()=>{}))
	console.log(deepEqual({}, null))
	console.log(deepEqual({value: 1}, {}))
	console.log(deepEqual({}, {}))
	console.log(deepEqual({}, {value: 1}))
	console.log(deepEqual(obj1, obj1))
	console.log(deepEqual(obj1, obj2))
	console.log(deepEqual(obj1, obj3))
	console.log(deepEqual(hello, hi))

}())











