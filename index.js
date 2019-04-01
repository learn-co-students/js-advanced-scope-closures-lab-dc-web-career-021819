function produceDrivingRange(integer) {
  return function(a, b) {
    let result =  b.slice(0, -2) - a.slice(0, -2) - integer
    if (result > 0) {
      return `${result} blocks out of range`
    }
    if (result < 0) {
      return `within range by ${-result}`
    }
  }
}

function produceTipCalculator(tip) {
  return number => number * tip
}

let ItemId = 0

function createDriver(name) {
  return class Driver {
    constructor(name) {
      this.name = name
      this.id = ++ItemId
    }
  }
}
