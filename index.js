const produceDrivingRange = function(range){
  return function(add1, add2){
    if (Math.abs(parseInt(add1) - parseInt(add2)) < range){
      return `within range by ${Math.abs(parseInt(add1) - parseInt(add2))}`
    } else {
      return `${Math.abs(parseInt(add1) - parseInt(add2)) - range} blocks out of range`
    }
  }
}

const produceTipCalculator = function(tip){
  return function(amount){
    return amount * tip
  }
}

const createDriver = function(){
  let driverId = 0;
  return class {
    constructor(name){
      this.name = name;
      this.id = ++driverId;
    }
  }
}
