// Find the maximum
//Junio 2019

function maxOfTwoNumbers(n1,n2){

  //container number
  //one ring to rule them all
  let num = 0;

  if(n1>n2){
    num = n1;
  }else if(n1 === n2){
    num = n1;
  }else{
    num = n2;
  }
  return num;
};

console.log(maxOfTwoNumbers(3, 2));
console.log(maxOfTwoNumbers(4, 4));
console.log(maxOfTwoNumbers(3, 4));

// Finding Longest Word
let words = [
  'mystery',
  'brother',
  'aviator',
  'crocodile',
  'pearl',
  'orchard',
  'crackpot'
];

// loop (not mine! Jun 2019)
function findLongestWord(words) {
  
  //container
  let maxlength   = '';
  //contador
  let lengthWords = 0;
//iniciem proces de cerca en cas que la matriu no estigui buida
  if ((words.length)) { 
    // iniciem bucle per cercar, comparant numero de caracters
    for (let i = 0; i < words.length; i++) { 
      //contador a cero
      // la primera paraula entra dins al ser + gran que cero
      //a partir de la segona es compara la llargaria del mot dintre del arr amb el guardat al container
      //si es mes llarga...
      if (words[i].length > lengthWords) {
        // guardem el mot
        maxlength = words[i]; 
        // guardem el num del tamany del mot
        lengthWords = words[i].length; 
      }
    }
  } else {
    // en el cas que la matriu estigui buida
    maxlength = undefined; 
  }

  // retorna el mot
  return maxlength; 
}
console.log(findLongestWord(words));

// Calculating a Sum my OwnOne
let numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumArray(num){
  //container
  let container = 0;

  num.forEach((e) => {
    container += (e);
  });
  console.log(`${container} is the total sum of the array`);
  return container;
}
console.log(sumArray(numbers));


// Calculate the Average
let numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(num){
  //container
  let container = 0;
//My own. Not a one liner, but my own still
  num.forEach((e) => {
    container += (e);
  });
  //we make here the avg
  container = container / num.length;
  //the answer Jasmine wants to hear
  (num.length === 0) ? container = undefined : container;

  console.log(`${container} is the average of the array`);
  return container;
}

console.log(averageNumbers(numbersAvg));

/*BIBLIOGRAFIA

https://www.jstips.co/en/javascript/array-average-and-median/

https://codeburst.io/javascript-arrays-finding-the-minimum-maximum-sum-average-values-f02f1b0ce332

*/

// Array of Strings
let wordsArr = [
  'seat',
  'correspond',
  'linen',
  'motif',
  'hole',
  'smell',
  'smart',
  'chaos',
  'fuel',
  'palace'
];

//Loop (Junio 2019)
function averageWordLength(arr){
 //dear container of mine
  let total = 0;

  if(arr.length == 0){
//aprende a andar, a frenar y luego corre!
    return undefined;
  }
  //itera sobre todos e del arr de str
  for(i=0; i < arr.length; i++){

    //almacenamos todas las palabras
    total += arr[i].length;
  }
  console.log(`${total} es num total de palabras`);

  //sacamos media
  total =  total / arr.length;

  return total;
};
console.log(averageWordLength(wordsArr));

// Unique Arrays
let wordsUnique = [
  'crab',
  'poison',
  'contagious',
  'simple',
  'bring',
  'sharp',
  'playground',
  'poison',
  'communion',
  'simple',
  'bring'
];

//Set (Feb 2020)
const uniquifyArray = (arr) => (arr.length == 0) ? undefined : [...new Set(arr)];
console.log(uniquifyArray(wordsUnique));

// Finding Elements
let wordsFind = [
  'machine',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'truth',
  'disobedience'
];

//includes, my own. Love ternaries!
const doesWordExist = (arr,word) => (arr.length == 0) ? false : 
                                    (arr.length == 1) ? (arr.includes(word) == true) : arr.includes(word);

console.log(doesWordExist(wordsFind,'truth'));
console.log(doesWordExist(wordsFind, "verdad"));
console.log(doesWordExist(wordsFind, ''));

// Counting Repetion
let wordsCount = [
  'machine',
  'matter',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'matter',
  'truth',
  'disobedience',
  'matter'
];
/**
 * https://stackoverflow.com/questions/840781/get-all-non-unique-values-i-e-duplicate-more-than-one-occurrence-in-an-array
 */
//cuantas veces está repetida la palabra en el array

let word1 = [];
function howManyTimes(arr, val){
  let count = 0;
 if (arr.length == 0) return undefined;
  //loop
  arr.forEach((v) => (v === val && count++));
  
  return count;
};
console.log(howManyTimes(wordsCount, 'matter'));

/*
 * https://gist.github.com/ralphcrisostomo/3141412
 */

// Bonus Quest

let matrix = [
  /* [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2] */
  [8, 2, 22, 97, 38, 8, 15, 0, 40, 0, 75, 4, 5, 7, 78, 52, 12, 50, 77, 91, 8],
  [49, 49, 99, 40, 17, 81, 18, 57, 60, 87, 17, 40, 98, 43, 69, 48, 4, 56, 62, 0],
  [81, 49, 31, 73, 55, 79, 14, 29, 93, 71, 40, 67, 53, 88, 30, 3, 49, 13, 36, 65],
  [52, 70, 95, 23, 4, 60, 11, 42, 69, 24, 68, 56, 1, 32, 56, 71, 37, 2, 36, 91],
  [22, 31, 16, 71, 51, 67, 63, 89, 41, 92, 36, 54, 22, 40, 40, 28, 66, 33, 13, 80],
  [24, 47, 32, 60, 99, 3, 45, 2, 44, 75, 33, 53, 78, 36, 84, 20, 35, 17, 12, 50],
  [32, 98, 81, 28, 64, 23, 67, 10, 26, 38, 40, 67, 59, 54, 70, 66, 18, 38, 64, 70],
  [67, 26, 20, 68, 2, 62, 12, 20, 95, 63, 94, 39, 63, 8, 40, 91, 66, 49, 94, 21],
  [24, 55, 58, 5, 66, 73, 99, 26, 97, 17, 78, 78, 96, 83, 14, 88, 34, 89, 63, 72],
  [21, 36, 23, 9, 75, 0, 76, 44, 20, 45, 35, 14, 0, 61, 33, 97, 34, 31, 33, 95],
  [78, 17, 53, 28, 22, 75, 31, 67, 15, 94, 3, 80, 4, 62, 16, 14, 9, 53, 56, 92],
  [16, 39, 5, 42, 96, 35, 31, 47, 55, 58, 88, 24, 0, 17, 54, 24, 36, 29, 85, 57],
  [86, 56, 0, 48, 35, 71, 89, 7, 5, 44, 44, 37, 44, 60, 21, 58, 51, 54, 17, 58],
  [19, 80, 81, 68, 5, 94, 47, 69, 28, 73, 92, 13, 86, 52, 17, 77, 4, 89, 55, 40],
  [4, 52, 8, 83, 97, 35, 99, 16, 7, 97, 57, 32, 16, 26, 26, 79, 33, 27, 98, 66],
  [88, 36, 68, 87, 57, 62, 20, 72, 3, 46, 33, 67, 46, 55, 12, 32, 63, 93, 53, 69],
  [4, 42, 16, 73, 38, 25, 39, 11, 24, 94, 72, 18, 8, 46, 29, 32, 40, 62, 76, 36],
  [20, 69, 36, 41, 72, 30, 23, 88, 34, 62, 99, 69, 82, 67, 59, 85, 74, 4, 36, 16],
  [20, 73, 35, 29, 78, 31, 90, 1, 74, 31, 49, 71, 48, 86, 81, 16, 23, 57, 5, 54],
  [1, 70, 54, 71, 83, 51, 54, 69, 16, 92, 33, 48, 61, 43, 52, 1, 89, 19, 67, 48]
];

 function greatestProduct(matrix, col, row){

   //merging to compare the whole
   let mergedArr = [].concat.apply([], matrix );
   console.log(mergedArr);
//!important 
/**Cuidado Robby con la idea. Coviertes los 400 num en un solo arr
 * no está mal para comparar la primera pregunta (1), pero no sirve para horizontal | vertical | diagonal!
 */
   let flag = 0;
   //checkme out
   let findAllSame = mergedArr.filter((el, index) => mergedArr.indexOf(el) !== index);
   console.log(findAllSame);
//como optmizo esto si el matrix es de dos millones de entradas!?
   let duplicates = [...new Set(findAllSame)];
   (duplicates[0] == 1) ? flag = 1 : 
   (duplicates[0] == 2) ? flag = 16 : flag;

  console.log(flag);
// Recuerda a Joan, solo una salida y no breaks!
//columns
let column = [];
for (let i = 0; i < matrix.length; i++){
  column.push(matrix[i][col]);
}
   console.log(column);

let verticalNum = matrix.map((n) => n[col]);
console.log(verticalNum);
   
//rows
let horizonNum = matrix[row].map((n) => n);
console.log(horizonNum);

 }
 console.log(greatestProduct(matrix,0, 5));

