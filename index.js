function produceDrivingRange(blockRange) {
  return function(arg1, arg2) {
    if (parseInt(arg1) + blockRange > parseInt(arg2)) {
      return `within range by ${(parseInt(arg1) + blockRange) - parseInt(arg2)}`
    } else if (parseInt(arg1) + blockRange < parseInt(arg2)) {
      return `${parseInt(arg2) - (parseInt(arg1) + blockRange)} blocks out of range`
    }
  }
}

function produceTipCalculator(tip) {
  return function(total) {
    return tip * total
  }
}

function createDriver() {
  let driverId = 0
  return class {
    constructor(name) {
      this.name = name
      this.id = ++driverId
    }
  }
}
