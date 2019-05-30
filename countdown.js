var countdownGenerator = function (x) {
  var index = x;

  var ignoreX = function() {
    if (index < 4 && index > 0) {
        console.log("T-minus " + index + "...");
    }
    if (index == 0) {
      console.log("Blast Off!");
    }
    if (index < 0) {
      console.log("Rockets already gone, bub!")
    }
    index--;
    return countdownGenerator;
    }
  return ignoreX;
};

var countdown = countdownGenerator(3);
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!




