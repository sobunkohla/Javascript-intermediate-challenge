//Q1 check if truthy or falsy

function filterOutFalsy(val1, val2) {
  return !val1 ? val1 : val2;
}

console.log(filterOutFalsy(true, "Dog"));

//Q2 Return the length of any given array
function arrLength(array) {
  return array.length;
}

console.log(arrLength([]));
//Q3 get the last element in an array

function arrlastelem(array) {
  return array[array.length - 1];
}

console.log(arrlastelem([1, 2, 3, "dog"]));

//Q4 return the sum of an array

function arrSum(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

console.log(arrSum([100, 200, 500]));

//Q5 add up the number from a single number

function progressiveSum(num) {
    let sum = 0; 
    for (let i = 1; i <= num; i++) {
        sum+=i;
    }
    return sum;
}

console.log(progressiveSum(600));

//Q6 Calculate the time 

function calcTime(sec) {
    let resultMin = Math.floor(sec / 60);
let resultSec = sec % 60;
let time = ''
  if (resultMin< 10) {
    resultMin= "0" + resultMin;
  }
  if (resultSec< 10) {
    resultSec= "0" + resultSec;
  }
  return time = resultMin +  ":" + resultSec;

}
console.log(calcTime(70));

//Q7  find the largest number 

function getMax (array) {
    let max = array[0];

    for (let i = 1; i < array.length ; i++) {
        if (array[i] > max) {
            max = array[i];
        };
    };
    return max;
}

console.log(getMax([12,-20,-10,300,100,-200]));

//Q8 reverse a string

function reverseString (string) {
    let reverse = '';
    for (let i = string.length-1; i>= 0; i--) {
       reverse +=string[i];
    };
 return reverse;
}

console.log(reverseString("This is cool"))

// How to use array.reverse
function reverseString (string) {
    return string.split('').reverse().join('')
}

console.log(reverseString("Sobu"))


//Q9 Turn every element in an array into 0

function convertToZero (array) {
    return array.map(element => 0)
}

console.log(convertToZero([12,-20,-10,300,100]));
//array fill

function convertZero (array) {
    return new Array(array.length).fill(0);
}

console.log(convertZero([12,-20,-10,300]));

//Q10 filter out all the apples 

function removeApples(array) {
    return array.filter(elem => elem !== 'Apple');
}

console.log(removeApples(['Banana','Apple','Orange', 'Apple','Dog']) );
// using for loop

function removeApple(array) {
  let  newArr =[]
    for (let i = 0; i < array.length ; i++) {
           if (array[i] != "Apple") {
            newArr.push(array[i]);
           };
    };
    return newArr
}

console.log(removeApple(['Banana','Apple','Orange', 'Apple','Dog']) );

//Q11 filter out falsey values 

function removeFalsy(array) {
    return array.filter(elem => elem );
}

console.log(removeFalsy([0,null,'Orange',"0", 'Apple',undefined ]) );
// using for loop

function removeFalse(array) {
  let  newArr =[]
    for (let i = 0; i < array.length ; i++) {
           if (!!array[i] === true) {
            newArr.push(array[i]);
           };
    };
    return newArr
}

console.log(removeFalse([0,'Apple',null, 'Apple',undefined]) );

//Q12 Truthy to true Falsy To false

function convertToBoolean(array) {
    return  array.map(element => !!element)
  }
  
  console.log(convertToBoolean([0,'Apple',null, 'Apple',undefined]) );

  // ternary operator method 

  function convertBoolean(array) {
      
    for (let i = 0; i < array.length ; i++) {
       array[i] = !!array[i]
 };
 return array
}

console.log(convertBoolean([0,'Apple',null, 'Apple',undefined]) ); 


