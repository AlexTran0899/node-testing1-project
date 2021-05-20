const utils = require('./index')

describe('[Exercise 1] trimProperties', () => {
  const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
  const expected = { foo: 'foo', bar: 'bar', baz: 'baz' }
  const actual = utils.trimProperties(input)
  test('[1] returns an object with the properties trimmed', () => {
    expect(actual).toEqual(expected)
  })
  test('[2] returns a copy, leaving the original object intact', ()=> {
    expect(actual).toEqual(expected)
    expect(input).not.toEqual(actual)
  })
})

describe('[Exercise 2] trimPropertiesMutation', () => {
  const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
  const expected = { foo: 'foo', bar: 'bar', baz: 'baz' }
  const actual = utils.trimPropertiesMutation(input)
  test('[3] returns an object with the properties trimmed', ()=> {
    expect(actual).toEqual(expected)
  })
  test('[4] the object returned is the exact same one we passed in', ()=> {
    expect(actual).toEqual(expected)
    expect(input).toEqual(actual)
  })
})

describe('[Exercise 3] findLargestInteger', () => {
  test('[5] returns the largest number in an array of objects { integer: 2 }', ()=> {
    const input = [{ integer: 1} , {integer: 2 }, {integer: 3 }]
    const expected = { integer: 3 }
    const actual = utils.findLargestInteger(input)
    expect(actual).toEqual(expected)
  })
})

describe('[Exercise 4] Counter', () => {
  let counter
  beforeEach(() => {
    counter = new utils.Counter(3) // each test must start with a fresh couter
  })
  test('[6] the FIRST CALL of counter.countDown returns the initial count', ()=> {
    expect(counter.countDown()).toBe(3)
    expect(counter.countDown()).toBe(2)
  })
  test('[7] the SECOND CALL of counter.countDown returns the initial count minus one', ()=>{
    expect(counter.countDown()).toBe(3)
    expect(counter.countDown()).toBe(2)
  })
  test('[8] the count eventually reaches zero but does not go below zero', ()=> {
    expect(counter.countDown()).toBe(3)
    expect(counter.countDown()).toBe(2)
    expect(counter.countDown()).toBe(1)
    expect(counter.countDown()).toBe(0)
    expect(counter.countDown()).toBe(0)

  })
})

describe('[Exercise 5] Seasons', () => {
  let seasons
  beforeEach(() => {
    seasons = new utils.Seasons() // each test must start with fresh seasons
    
  })
  test('[9] the FIRST call of seasons.next returns "summer"', ()=>{
    expect(seasons.next()).toBe('summer')
  })
  test('[10] the SECOND call of seasons.next returns "fall"', ()=>{
    expect(seasons.next()).toBe('summer')
    expect(seasons.next()).toBe('fall')
  })
  test('[11] the THIRD call of seasons.next returns "winter"', ()=>{
    expect(seasons.next()).toBe('summer')
    expect(seasons.next()).toBe('fall')
    expect(seasons.next()).toBe('winter')
  })
  test('[12] the FOURTH call of seasons.next returns "spring"', ()=>{
    expect(seasons.next()).toBe('summer')
    expect(seasons.next()).toBe('fall')
    expect(seasons.next()).toBe('winter')
    expect(seasons.next()).toBe('spring')
  })
  test('[13] the FIFTH call of seasons.next returns again "summer"', ()=>{
    expect(seasons.next()).toBe('summer')
    expect(seasons.next()).toBe('fall')
    expect(seasons.next()).toBe('winter')
    expect(seasons.next()).toBe('spring')
    expect(seasons.next()).toBe('summer')
    expect(seasons.next()).toBe('fall')
  })
  test('[14] the 40th call of seasons.next returns "spring"', ()=>{
    for (let i = 0; i< 39; i++){
      seasons.next()
    }
    expect(seasons.next()).toBe('spring')
  })
})

describe('[Exercise 6] Car', () => {
  let focus
  beforeEach(() => {
    focus = new utils.Car('focus', 20, 30) // each test must start with a fresh car
  })
  test('[15] driving the car returns the updated odometer', ()=>{
    focus.drive(600); expect(focus.odometer).toBe(600)
    focus.drive(1); expect(focus.odometer).toBe(600)
  })
  test('[16] driving the car uses gas', ()=>{
    focus.drive(30); expect(focus.tank).toBe(19)
    focus.drive(570); expect(focus.tank).toBe(0)
    // focus.drive(1); expect(focus.tank).toBe(0)

  })
  test('[17] refueling allows to keep driving', ()=> {
    focus.drive(600); expect(focus.odometer).toBe(600)
    focus.refuel(1); expect(focus.tank).toBe(1)
    focus.drive(15); expect(focus.odometer).toBe(615)
  })

  test('[18] adding fuel to a full tank has no effect', ()=>{
    focus.refuel(2); expect(focus.tank).toBe(20)
  })
})

describe('[Exercise 7] isEvenNumberAsync', () => {
  let isEven
  beforeEach(() => {
    isEven = (data)=> utils.isEvenNumberAsync(data) 
  })
  test('[19] resolves true if passed an even number', ()=>{
    expect(isEven(2)).toBe(true)
   })
  test('[20] resolves false if passed an odd number', ()=>{
    expect(isEven(5)).toBe(false)
  })
  
  test('[21] rejects an error with the message "number must be a number" if passed a non-number type', ()=>{
    expect(isEven("five")).toEqual("number must be a number")
  })

  test('[22] rejects an error with the message "number must be a number" if passed NaN', ()=>{
    expect(isEven(NaN)).toEqual("number must be a number")
  })
})
