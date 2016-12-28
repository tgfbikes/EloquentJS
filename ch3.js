

(function () {

	// Minimum
	function min (a, b) {
		return a < b ? a : b
	}

	console.log(min(2, 3), min(3, 2))

	// Recursion
	function isEven (number) {
		absNumber = Math.abs(number)
		if (absNumber === 0) {
			return true
		}

		if (absNumber === 1) {
			return false
		}

		return isEven(absNumber - 2)
	}

	console.log(isEven(50), isEven(75), isEven(-1))

	// Bean counting
	function countBs (str) {
		return countChar(str, 'B')
	}

	function countChar (str, char) {
		let count = 0

		for (let i = 0; i < str.length; i++) {
			if (str[i] === char) {
				count++
			}
		}

		return count
	}

	console.log(countBs('bbbBbbBbbBB'))

}())