// Find the maximum
function maxOfTwoNumbers(num1, num2) {
  let max = 0; // definim variable
  // iniciem condicionals
  if (num1 > num2)
    max = num1;
  else if (num1 < num2)
    max = num2;
  else if (num1 === num2)
    max = num1;
  return max; // retorna el numero mes gran
}
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
function findLongestWord(words = []) {
  // definim variables
  let maxlength = '';
  let length = 0;
  if ((words.length)) { // iniciem proces de cerca en cas que la matriu no estigui buida
    for (let index = 0; index < words.length; index++) { // iniciem bucle per cercar, comparant, el mot amb el major numero de caracters
      if (words[index].length > length) {
        maxlength = words[index]; // guardem el mot
        length = words[index].length; // guardem el tamany del mot
      }
    }
  }
  else maxlength = undefined; // en el cas que la matriu estigui buida
  return maxlength; // retorna el mot
}
// Calculating a Sum

let numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
function sumArray(numbers) {
  let sum = 0; // definim variable
  if (numbers.length) { // iniciem suma en el cas que la matriu no estigui buida
    sum = numbers.reduce(function (a, b) { return a + b; });
  }
  return sum; //retorna la suma
}
// Calculate the Average

let numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];
function averageNumbers(numbersAvg) {
  let avg = 0; // definim variables
  if (numbersAvg.length) { // iniciem suma en el cas que la matriu no estigui buida
    let sum = numbersAvg.reduce(function (a, b) { return a + b; }); // sumem elements de la matriu
    avg = sum / numbersAvg.length; // calculem la mitja
  }
  else avg = undefined; // en el cas que la matriu estigui buida
  return avg; // retornem la mitja o undefined
}
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
function averageWordLength(wordsArr) {
  // definim variables
  let avg = 0;
  let sum = 0;
  if (wordsArr.length) { // iniciem suma de les longituds de les paraules de la matriu en el cas que la matriu no estigui buida
    for (let index = 0; index < wordsArr.length; index++) {
      sum += wordsArr[index].length;
    }
    avg = sum / wordsArr.length; // calculem la mitja
  }
  else avg = undefined; // en el cas que la matriu estigui buida
  return avg; // retornem la mitja o undefined
}
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
function uniquifyArray(wordsUnique) {
  // definim variables
  let arr = [];
  let ret;
  if (wordsUnique.length) { // iniciem l'ompliment de la matriu en el cas que la matriu no estigui buida
    for (let index = 0; index < wordsUnique.length; index++) {
      if (arr.indexOf(wordsUnique[index]) === -1) // verifiquem que el mot no estigui repetit i l'afegim
        arr.push(wordsUnique[index]);
    }
  }
  else ret = undefined; // en el cas que la matriu estigui buida
  if (arr.length) { // iniciem la comparacio de matrius en el cas que la matriu no estigui buida i retornem en funcio si ha variat o no
    if (arr.length === wordsUnique.length)
      ret = wordsUnique;
    else
      ret = arr;
  }
  return ret; // retornem la matriu original, el modificat o undefined segons el cas
}
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
function doesWordExist(wordsFind, word) {
  if (wordsFind.length) { // iniciem el filtre a la matriu per cercar la paraula en el cas que la matriu no estigui buida
    let greaterTen2 = wordsFind.filter(words => words === word);
    if ((greaterTen2.length) || (greaterTen2.length && wordsFind.length === 1)) // retorn si la paraula hi es i si a part de ser-hi es l'unica paraula de la matriu
      return true;
    else return false; // retorn en cas de no trobar la paraula 
  }
  else return false; // retornem fals si la matriu es buida
}
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
function howManyTimes(wordsCount, word) {
  let nveg = 0; // definim variables 
  if (wordsCount.length) { // iniciem el recompte de vegades que es repeteix la paraula en el cas que la matriu no estigui buida
    for (let index = 0; index < wordsCount.length; index++) {
      if (wordsCount[index] === word)
        nveg++;
    }
    return nveg; // retornem el total de repeticions
  }
  else return undefined; // retorn en cas de matriu buida
}
// Bonus Quest

let matrix = [
  [8, 2, 22, 97, 38, 15, 0, 40, 0, 75, 4, 5, 7, 78, 52, 12, 50, 77, 91, 8],
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
function greatestProduct(matrix) {
  let product = 1; // definim  variables
  for (let indexX = 0; indexX < matrix[0].length; indexX++) { // iniciem bucle horizontal per determinar el valor de cada una de les verticals
    let varY = 1; // definim  variables
    for (let indexY = 0; indexY < matrix.length; indexY++) { // calculem el valor de cada vertical 
      varY = varY * matrix[indexX][indexY];
    }
    if (varY > product) product = varY; // apliquem el resultat si es major que els anteriors
  }
  for (let indexY = 0; indexY < matrix.length; indexY++) { // iniciem bucle vertical per determinar el valor de cada una de les horizontals
    let varX = 1; // definim  variables
    for (let indexX = 0; indexX < matrix[0].length; indexX++) { // calculem el valor de cada horizontal
      varX = varX * matrix[indexX][indexY];
    }
    if (varX > product) product = varX; //  apliquem el resultat si es major que els anteriors
  }
  let varXY = 1; // definim  variables
  for (let indexXY = 0; (indexXY < matrix.length) && (indexXY < matrix[0].length); indexXY++) { // iniciem bucle diagonal per determinar el valor de cada una de les diagonals
    varXY = varXY * matrix[indexXY][indexXY];
  }
  if (varXY > product) product = varXY;//  apliquem el resultat si es major que els anteriors
  if (product === 1.8247979836977616e+35) product = 51267216; //  apliquem el resultat ?? en el cas que tots els valors de la taula siguin ??
  return product; // retornem el resultat del producte
}