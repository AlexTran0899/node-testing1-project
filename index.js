function trimProperties(obj) {
  const object = {}
  Object.keys(obj).map(data =>  (object[data] = obj[data].trim()))
  return object
}

function trimPropertiesMutation(obj) {
   Object.keys(obj).map(data =>  (obj[data] = obj[data].trim()))
  return obj
}

function findLargestInteger(integers) {
  const numbers = integers.map(data => data.integer)
  return({integer: Math.max(...numbers)})
}

class Counter {
  constructor(initialNumber) {
    this.count = initialNumber
  }
  countDown() {
    return this.count? this.count -- : 0
  }
}

class Seasons {
  constructor() {
    this.season = ['summer','fall', 'winter', 'spring']
    this.count = -1
  }
  next() {
    return this.season[this.count === 3? this.count = 0 : this.count+=1]
  }
}

class Car {
  /**
   * [Exercise 6A] Car creates a car object
   * @param {string} name - the name of the car
   * @param {number} tankSize - capacity of the gas tank in gallons
   * @param {number} mpg - miles the car can drive per gallon of gas
   */
  constructor(name, tankSize, mpg) {
    this.odometer = 0 // car initilizes with zero miles
    this.tank = tankSize // car initiazes full of gas
    this.mpg = mpg
    // ✨ initialize whatever other properties are needed
  }

  /**
   * [Exercise 6B] Car.prototype.drive adds miles to the odometer and consumes fuel according to mpg
   * @param {string} distance - the distance we want the car to drive
   * @returns {number} - the updated odometer value
   *
   * EXAMPLE
   * const focus = new Car('focus', 20, 30)
   * focus.drive(100) // returns 100
   * focus.drive(100) // returns 200
   * focus.drive(100) // returns 300
   * focus.drive(200) // returns 500
   * focus.drive(200) // returns 600 (ran out of gas after 100 miles)
   */
  drive(distance) {
    this.tank = this.tank - (distance / this.mpg)
    this.odometer = this.odometer + distance
  }

  /**
   * [Exercise 6C] Adds gallons to the tank
   * @param {number} gallons - the gallons of fuel we want to put in the tank
   * @returns {number} - the miles that can be driven after refueling
   *
   * EXAMPLE
   * const focus = new Car('focus', 20, 30)
   * focus.drive(600) // returns 600
   * focus.drive(1) // returns 600 (no distance driven as tank is empty)
   * focus.refuel(99) // returns 600 (tank only holds 20)
   */
  refuel(gallons) {
  }
}

/**
 * [Exercise 7] Asynchronously resolves whether a number is even
 * @param {number} number - the number to test for evenness
 * @returns {promise} - resolves true if number even, false otherwise
 *
 * EXAMPLE
 * isEvenNumberAsync(2).then(result => {
 *    // result is true
 * })
 * isEvenNumberAsync(3).then(result => {
 *    // result is false
 * })
 * isEvenNumberAsync('foo').catch(error => {
 *    // error.message is "number must be a number"
 * })
 * isEvenNumberAsync(NaN).catch(error => {
 *    // error.message is "number must be a number"
 * })
 */
function isEvenNumberAsync(number) {
  // ✨ implement
}

module.exports = {
  trimProperties,
  trimPropertiesMutation,
  findLargestInteger,
  isEvenNumberAsync,
  Counter,
  Seasons,
  Car,
}
