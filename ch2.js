
(function () {

	// Looping a triangle
	let hashString = ''

	for (let i = 0; i < 7; i++) {
		console.log(hashString += '#')
	}

	// FizzBuzz

	for (let i = 1; i <= 100; i++) {
		if (i % 3 === 0 || i % 5 === 0) {
			console.log('FizzBuzz')
		} else {
			console.log(i)
		}
	}

	// Chess board

	let size = 4
	let str = ''
	let offset

	for (let height = 1; height <= size; height++) {
	  if (height % 2 === 0) {
	    str += '# '.repeat(size)
	  } else {
	    str += ' #'.repeat(size)
	  }
	  str += '\n'
	}

	console.log(str)

}())
