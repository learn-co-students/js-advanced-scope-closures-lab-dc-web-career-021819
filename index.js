const produceDrivingRange = function(range) {
  return (str1, str2) => {
    diff = Math.abs(parseInt(str1, 10) - parseInt(str2, 0));
    if (diff <= range) {
      return `within range by ${range - diff}`;
    } else {
      oOR = diff - range;
      return oOR + " blocks out of range";
    }
  };
};

const produceTipCalculator = function(grat) {
  return fare => {
    return fare * grat;
  };
};

function createDriver() {
  let driverId = 0;
  return class {
    constructor(name) {
      this.name = name;
      this.id = driverId++;
    }
  };
}
