//wrapping both prime and fibonacci in one function call
(function () {

  //function to find the fibonacci of the user's inputted value
  fib = (val) => {
    
    if (val < 0) {throw "Error: The number must not be a negative!"}
    if (isNaN(val)) {throw "Error: You must enter a number!"}
    
   
    let val1 = 0, val2 = 1;
    
    if (val == 0) { return val1;}
    if (val == 1) { return val2;}
    
    let res = 0;

    for (i = 0; i < val - 1; i++) {
      res = val1 + val2;
      val1 = val2;
      val2 = res;
    }
    return val2;
  }

  //function to check if the number is a prime number
  primeChecker = (val2) => {
   
    if (val2 < 2) { return false;}
    
    for (let i = 2; i < val2; ++i) {
      if (val2 % i == 0){
        return false;
    } else { 
        return true;
  }
}}

  const fibonacciForm = document.getElementById('fibonacciform');

  if (fibonacciForm) {
    
    const ind = document.getElementById('fib-ind');

    const errorMessages = document.getElementById('errorMessages');

    //spits out error message at the top of the unordered list
    const errorToText = errorMessages.getElementsByClassName('text-for-errors')[0]; 
    
    let fibList = document.getElementById('results');

    fibonacciForm.addEventListener('submit', (event) => {
      event.preventDefault();
      try {
       
        errorMessages.classList.add('hidden');

        const index = parseInt(ind.value);

        const fibCalculation = fib(index);
        const isPrime = primeChecker(fibCalculation);
       
        let listItem = document.createElement('li');
        listItem.innerHTML = index.toString() + " has a Fibonacci of " + fibCalculation.toString() + ".";

        if (isPrime) { 
          listItem.className = "is-prime";
          fibList.appendChild(listItem);
        }

        else { 
          listItem.className = "not-prime";
          fibList.appendChild(listItem);
        }
        fibonacciForm.reset();

      } catch (e) {
        const eMessage = e.toString(); 
        errorToText.innerHTML = e;

        // unhides the error message when an error is caught
        errorMessages.classList.remove('hidden'); 

        fibonacciForm.reset();
      }
    });
  }
})

();