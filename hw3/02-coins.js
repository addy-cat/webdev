let calculateChange = (input) => {
  // Add your code here
  var current = input*100;
  var dollars_count = 0;
  var quarters_count = 0;
  var dimes_count = 0;
  var nickels_count = 0;
  var pennies_count = 0;

  if (input > 10.00) {
    return("Error: the number is too large.")
  } else {
    while(current >= 100) {
      current -= 100;
      dollars_count++;
    }
    
    while(current >= 25) {
      current -= 25;
      quarters_count++;
    }

    while(current >= 10) {
      current -= 10;
      dimes_count++;
    }

    while(current >= 5) {
      current -= 5;
      nickels_count++;
    }

    while(current >= 1) {
      current -= 1;
      pennies_count++;
    }

    return(input + " ==> " + dollars_count + " dollars, " + quarters_count + " quarters, " + dimes_count + " dimes, " + nickels_count + " nickels, " + pennies_count + " pennies.");
  }


};

// Sample Test Cases
console.log(calculateChange(4.62));
// $4.62 ==> 4 dollars, 2 quarters, 1 dime, 2 pennies
console.log(calculateChange(9.74));
// $9.74 ==> 9 dollars, 2 quarters, 2 dimes, 4 pennies
console.log(calculateChange(0.16));
// $0.16 ==> 1 dime, 1 nickel, 1 penny
console.log(calculateChange(15.11));
// $15.11 ==> Error: the number is too large
