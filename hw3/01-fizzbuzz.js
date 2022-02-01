function fizzbuzz() {
  // Add your code here
  for (i = 0; i <= 100; i++) {
    if(i % 3 == 0) {
      console.log("fizz")
    } else if ((i % 5 == 0) && (i % 3 != 0)) {
      console.log("buzz")
    } else if ((i % 5 == 0) && (i % 3 == 0)) {
      console.log("fizzbuzz")
    }
  }
}

fizzbuzz();
