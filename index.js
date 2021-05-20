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
  constructor(name, tankSize, mpg) {
    this.odometer = 0 // car initilizes with zero miles
    this.tank = tankSize // car initiazes full of gas
    this.mpg = mpg
  }
  drive(distance) {
    this.tank = this.tank - (distance / this.mpg)? this.tank - (distance / this.mpg): this.tank = 0
    this.odometer = this.tank >= 0? this.odometer + distance: this.odometer
  }
  refuel(gallons) {
    const needed = 20 - this.tank 
    const amount = needed - gallons 
    this.tank = (amount < 0)? 20: this.tank + gallons
  }
}

function isEvenNumberAsync(number) {
  if(typeof number === "string" || !number){
    return "number must be a number"
  } else {
     return number % 2? false : true
  }
 
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
