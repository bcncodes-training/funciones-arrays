// Find the maximum

function maxOfTwoNumbers(num1,num2) {
  let elmayor;

  if(num1 > num2)
    elmayor = num1;
  else 
    elmayor = num2;

  return elmayor;
}

// Finding Longest Word
let words = [
  'mystery',
  'brother',
  'aviator',
  'crocodile',
  'crocodile',
  'pearl',
  'orchard',
  'crackpot'
];

function findLongestWord(words) {
  words.sort(function(a, b) {
    if (a.length > b.length)
      return -1;
    if (a.length < b.length)
      return 1;
    return 0;
  })

  return words[0];
}

// Calculating a Sum

let numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumArray(numbers) {
  let reducer = (accumulator, currentValue) => accumulator + currentValue;
  if (numbers.length == 0)
      return 0;
  else
      return numbers.reduce(reducer);
}

// Calculate the Average

let numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbers) {
  if (numbers.length == 0)
    return ;
  return sumArray(numbers)/numbers.length;
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

function averageWordLength(words) {
  let arrayLong = [words.length];

  for (let i=0; i<words.length; i++)
    arrayLong[i] = words[i].length;

  if (words.length == 0)
    return ;
  return averageNumbers(arrayLong);
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

function uniquifyArray(words) {
  let indice = 0;
  let indiceOk = 0;

  while (indice < words.length) {

    do {
      indiceOk = words.indexOf(words[indice],indice+1)
      if (indiceOk > 0) {
        // Eliminamos el elemento
        words.splice(indiceOk,1);
        }
    } while (indiceOk > 0);
    
    indice++;
  }
  if (words.length == 0)
    return ;

  return words;
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

function doesWordExist(words,word) {
  for (let i=0; i<words.length; i++) {
    if (words[i] === word)
      return true;
  }
  return false;
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

function howManyTimes(words,word) {
  let contWords = 0;

  for (let i=0; i<words.length; i++) {
    if (words[i] === word)
      contWords++;
  }

  if (words.length == 0)
    return ;

  return contWords;
}

// Bonus Quest

let matrix = [
  [08,02,22,97,38,15,00,40,00,75,04,05,07,78,52,12,50,77,91,08],
  [49,49,99,40,17,81,18,57,60,87,17,40,98,43,69,48,04,56,62,00],
  [81,49,31,73,55,79,14,29,93,71,40,67,53,88,30,03,49,13,36,65],
  [52,70,95,23,04,60,11,42,69,24,68,56,01,32,56,71,37,02,36,91],
  [22,31,16,71,51,67,63,89,41,92,36,54,22,40,40,28,66,33,13,80],
  [24,47,32,60,99,03,45,02,44,75,33,53,78,36,84,20,35,17,12,50],
  [32,98,81,28,64,23,67,10,26,38,40,67,59,54,70,66,18,38,64,70],
  [67,26,20,68,02,62,12,20,95,63,94,39,63,08,40,91,66,49,94,21],
  [24,55,58,05,66,73,99,26,97,17,78,78,96,83,14,88,34,89,63,72],
  [21,36,23,09,75,00,76,44,20,45,35,14,00,61,33,97,34,31,33,95],
  [78,17,53,28,22,75,31,67,15,94,03,80,04,62,16,14,09,53,56,92],
  [16,39,05,42,96,35,31,47,55,58,88,24,00,17,54,24,36,29,85,57],
  [86,56,00,48,35,71,89,07,05,44,44,37,44,60,21,58,51,54,17,58],
  [19,80,81,68,05,94,47,69,28,73,92,13,86,52,17,77,04,89,55,40],
  [04,52,08,83,97,35,99,16,07,97,57,32,16,26,26,79,33,27,98,66],
  [88,36,68,87,57,62,20,72,03,46,33,67,46,55,12,32,63,93,53,69],
  [04,42,16,73,38,25,39,11,24,94,72,18,08,46,29,32,40,62,76,36],
  [20,69,36,41,72,30,23,88,34,62,99,69,82,67,59,85,74,04,36,16],
  [20,73,35,29,78,31,90,01,74,31,49,71,48,86,81,16,23,57,05,54],
  [01,70,54,71,83,51,54,69,16,92,33,48,61,43,52,01,89,19,67,48],
];
let matrix2 = [
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
];

function greatestProduct(matrix) {
  let producto = 0;
  let productoMax = 0;

  // La matriz es n*n
  
  // Horizontal - filas
  for (let i=0; i<matrix.length; i++) {
    for (let y=0; y<matrix.length; y++) {

      console.log(`Fila: ${i} Columna:${y} Valor:${matrix[i][y]}`);
      
      switch (matrix.length-1-y) {
        case 0:
          producto = matrix[i][y];
          break;
        case 1:
          producto = matrix[i][y] * matrix[i][y+1];
          break;
        case 2:
          producto = matrix[i][y] * matrix[i][y+1] * matrix[i][y+2];
          break;
        default:
          producto = matrix[i][y] * matrix[i][y+1] * matrix[i][y+2] * matrix[i][y+3];
      }

      if (producto > productoMax)
        productoMax = producto;
    }
  }
  
    // Vertical - columnas
  for (let y=0; y<matrix.length; y++) {
    for (let i=0; i<matrix.length; i++) {

      console.log(`Fila: ${i} Columna:${y} Valor:${matrix[i][y]}`);
      
      switch (matrix.length-1-i) {
        case 0:
          producto = matrix[i][y];
          break;
        case 1:
          producto = matrix[i][y] * matrix[i+1][y];
          break;
        case 2:
          producto = matrix[i][y] * matrix[i+1][y] * matrix[i+2][y];
          break;
        default:
          producto = matrix[i][y] * matrix[i+1][y] * matrix[i+2][y] * matrix[i+3][y];
      }
      
      if (producto > productoMax)
        productoMax = producto;
    }
  }
  
    
  // Diagonal de arriba-derecha - abajo-izquierda
  let x = 0;
  let y = 0;
    
    // 1ª Parte Diagonal de arriba-derecha - abajo-izquierda
    for (let i=0; i<matrix.length; i++) {
      x = 0;
      y = matrix.length-1-i;
      for (let z=0; z<i+1; z++) {

        console.log(`Fila: ${x} Columna:${y} Valor:${matrix[x][y]} Casos:${(i-z)}`);
        
        switch ((matrix.length-1)-y) {
          case 0:
            producto = matrix[x][y];
            break;
          case 1:
            producto = matrix[x][y] * matrix[x+1][y+1];
            break;
          case 2:
            producto = matrix[x][y] * matrix[x+1][y+1] * matrix[x+2][y+2];
            break;
          default:
            producto = matrix[x][y] * matrix[x+1][y+1] * matrix[x+2][y+2] * matrix[x+3][y+3];
        }
        
        x++;
        y++;

        if (producto > productoMax)
          productoMax = producto;
      }
    }
    
    // 2ª Parte Diagonal de arriba-derecha - abajo-izquierda
    for (let i=1; i<matrix.length; i++) {
      x = i;
      y = 0;
      for (let z=i-1; z<matrix.length-1; z++) {

        console.log(`Fila: ${x} Columna:${y} Valor:${matrix[x][y]} Casos:${(matrix.length-1)-z-1}`);
        
        switch ((matrix.length-1)-z-1) {
          case 0:
            producto = matrix[x][y];
            break;
          case 1:
            producto = matrix[x][y] * matrix[x+1][y+1];
            break;
          case 2:
            producto = matrix[x][y] * matrix[x+1][y+1] * matrix[x+2][y+2];
            break;
          default:
            producto = matrix[x][y] * matrix[x+1][y+1] * matrix[x+2][y+2] * matrix[x+3][y+3];
        }
        
        x++;
        y++;

        if (producto > productoMax)
          productoMax = producto;
      }
    }

    // Diagonal de arriba-izquirda - abajo-derecha
    // 1ª Parte Diagonal de arriba-izquierda - abajo-derecha
    for (let i=0; i<matrix.length; i++) {
      x = 0;
      y = i;
      for (let z=0; z<i+1; z++) {

        console.log(`Fila: ${x} Columna:${y} Valor:${matrix[x][y]} Casos:${(i-z)}`);
        
        switch (i-z) {
          case 0:
            producto = matrix[x][y];
            break;
          case 1:
            producto = matrix[x][y] * matrix[x+1][y-1];
            break;
          case 2:
            producto = matrix[x][y] * matrix[x+1][y-1] * matrix[x+2][y-2];
            break;
          default:
            producto = matrix[x][y] * matrix[x+1][y-1] * matrix[x+2][y-2] * matrix[x+3][y-3];
        }
        
        x++;
        y--;

        if (producto > productoMax)
          productoMax = producto;
      }
    }
    
    // 2ª Parte Diagonal de arriba-izquierda - abajo-derecha
    for (let i=1; i<matrix.length; i++) {
      x = i;
      y = matrix.length-1;
      for (let z=i; z<=matrix.length-1; z++) {

        console.log(`Fila: ${x} Columna:${y} Valor:${matrix[x][y]} Casos:${(matrix.length-1)-z}`);
        
        switch ((matrix.length-1)-z) {
          case 0:
            producto = matrix[x][y];
            break;
          case 1:
            producto = matrix[x][y] * matrix[x+1][y-1];
            break;
          case 2:
            producto = matrix[x][y] * matrix[x+1][y-1] * matrix[x+2][y-2];
            break;
          default:
            producto = matrix[x][y] * matrix[x+1][y-1] * matrix[x+2][y-2] * matrix[x+3][y-3];
        }
        
        x++;
        y--;

        if (producto > productoMax)
          productoMax = producto;
      }
    }
    
  return productoMax;
}


console.log(greatestProduct(matrix));

