
function produceDrivingRange(number){
  return function(block1, block2) {
    let num1 = parseInt(block1.replace ( /[^\d.]/g, '' ), 10);
    let num2 = parseInt(block2.replace ( /[^\d.]/g, '' ), 10);
    let difference = Math.abs(num1 - num2)
    if (difference < number) {
      return `within range by ${Math.abs(number - difference)}`
    } else {
      return `${Math.abs(number - difference)} blocks out of range`
    }
  }
}

function produceTipCalculator(percent){
  return function(total){
    return percent * total;
  }
}

function createDriver(){
  let driverId = 0;
  return class{
    constructor(name){
      this.name = name;
      this.id = ++driverId;
    }
  }
}
