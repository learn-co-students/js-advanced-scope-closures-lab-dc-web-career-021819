
// produceDrivingRange() - Calculates whether a given trip is within range. For example, produceDrivingRange(10) returns a function that will take two strings as arguments and returns a message stating whether the trip is in range. If foo = produceDrivingRange(10), then foo('12th', '15th') would return "within range by 7" and foo('12th', '30th') would return "8 blocks out of range". We recommend referencing the test/indexTest.js for more details.

// How do I establish position?
// function produceDrivingRange(range) {
//   return (a, b) {
//     a + range, compare b
//
//   }
// }
function produceDrivingRange( blockRange ) {
  return function ( startingBlock, endingBlock ) {

    let start = parseInt( startingBlock );
    let end = parseInt( endingBlock );
    let distanceToTravel = Math.abs( end - start );
    let difference = blockRange - distanceToTravel;

    if ( difference > 0 ) {
      return `within range by ${difference}`
    } else {
      return `${Math.abs(difference)} blocks out of range`
    }
  }
}






// produceTipCalculator() - Returns a function that then calculates a tip. For example, produceTipCalculator(.10) returns a function that calculates ten percent tip on a fare. produceTipCalculator(.20) returns a function that calculates twenty percent tip on a fare.

function produceTipCalculator( percentage ) {
  return function (rideFare) {
      return rideFare * percentage;
  }
}

// function createItem() {
//   let ItemId = 0;
//   // return the class
//   return class {
//     constructor(name, manufacturePrice) {
//       this.name = name;
//       this.manufacturePrice = manufacturePrice;
//       this.id = ++ItemId;
//     }
//
//     retailPrice(marketMultiplier) {
//       return marketMultiplier * this.manufacturePrice;
//     }
//   };
// }
//
// const Item = createItem();
// // Execute createItem and assign the returned class to equal Item.
// // We only need to call createItem() one time in our codebase.
//
// let tennisShoe = new Item("tennis shoe", 15);
// // {id: 1, name: 'tennis shoe', manufacturePrice: 15}
//
// let tshirt = new Item("t shirt", 8);
// // {id: 2, name: 't shirt', manufacturePrice: 8}



//
// createDriver is a function that returns a Driver class. The class has reference to a driverId that is incremented each time a new driver is created. The rest of the code base does not have access to driverId.

function createDriver() {
  let driverId = 0
  return class {
    constructor( name ) {
      this.id = ++driverId
      this.name = name
    }
  }
}
