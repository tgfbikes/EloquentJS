

// A vector type
class Vector {
	constructor (x, y) {
		this.x = x
		this.y = y
	}

	get length () {
		return Math.sqrt((this.x * this.x) + (this.y * this.y))
	}

	plus (someVector) {
		let newX = this.x + someVector.x
		let newY = this.y + someVector.y
		return new Vector(newX, newY)
	}

	minus (someVector) {
		let newX = this.x - someVector.x
		let newY = this.y - someVector.y
		return new Vector(newX, newY)
	}
}

console.log(new Vector(1, 2).plus(new Vector(2, 3)))
console.log(new Vector(1, 2).minus(new Vector(2, 3)))
console.log(new Vector(3, 4).length)
// let vectorA = new Vector(3, 4)
// let vectorB = new Vector(5, 5)

// console.log('Vector type - vectorA.length: ', vectorA.length)
// console.log('Vector type - vectorB.length: ',vectorB.length)

// let vectorC = vectorA.plus(vectorB)
// let vectorD = vectorB.minus(vectorC)

// console.log('Vector type - vectorC.length: ', vectorC.length)
// console.log('Vector type - vectorD.length: ', vectorD.length)
