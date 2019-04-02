const produceDrivingRange = function(range){
  return function(start, destination){
    let distance = Math.abs(parseInt(start.slice(0,2)) - parseInt(destination.slice(0,2)))
    // console.log(distance)
    if (distance > range) {
      return `${Math.abs(distance - range)} blocks out of range`
    } else {
      return `within range by ${Math.abs(distance - range)}`
    }
  }
}

const produceTipCalculator = function(percentage){
  return function(amount){
    return amount * percentage
  }
}

function createDriver(){
  let driverId = 0
  return class{
    constructor(name){
      this.id = driverId
      this.name = name
      driverId += 1
    }

  }
}
