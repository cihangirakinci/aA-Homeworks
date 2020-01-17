function mysteryScoping1() {
    const x = 'out of block';
    if (true) {
      const x = 'in block';  
      console.log(x);
    }
    console.log(x);
  }


function mysteryScoping2() {
    const x = 'out of block';
    if (true) {
      const x = 'in block';  
      console.log(x);
    }
    console.log(x);
} 

function mysteryScoping3() {
    const x = 'out of block';
    if (true) {
      var x = 'in block';  
      console.log(x);
    }
    console.log(x);
}

function mysteryScoping4() {
    let x = 'out of block';
    if (true) {
      let x = 'in block';  
      console.log(x);
    }
    console.log(x);
}

function mysteryScoping5() {
    let x = 'out of block';
    if (true) {
      let x = 'in block';  
      console.log(x);
    }
    let x = 'out of block again';
    console.log(x);
}
  
//mysteryScoping5();

function madLib(verb, adjective, noun){
    console.log('We shall '+ verb.toUpperCase()+ " the " + adjective.toUpperCase()+ " "+ noun.toUpperCase()+ ".");

}


//madLib('make', 'best', 'guac');

//"We shall MAKE the BEST GUAC."

function fizzBuzz(array){
    new_array = [];
    
    for(i = 0; i < array.length; i++){
        if ((array[i] % 3 == 0 || array[i] % 5 == 0) && !(array[i] % 3 == 0 && array[i] % 5 == 0)){
            new_array.push(array[i]);
        } 
    }
    return new_array;
}

array = [1,2,3,4,5,15];
// console.log(fizzBuzz(array));


function isPrime(number){

    for (i = 2; i < number; i ++){
        if (number % i == 0){
            return false;
        }
    }
    return true;
}

// console.log(isPrime(2));

// console.log(isPrime(10));

// console.log(isPrime(15485863));

// console.log(isPrime(3548563));

function sumOfNPrimes(number){


    let count = 0;
    let sumPrimes = 0;
    for (i = 2; count < number; i++){
        if (isPrime(i)){
            count ++;
            sumPrimes += i;
        }     
    }
    return sumPrimes;
}

console.log(sumOfNPrimes(4));
