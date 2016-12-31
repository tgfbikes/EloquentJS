

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
	function reverseArray (someArray) {

	}

	function reverseArrayInPlace (someArray) {
		
	}
}())