// Find the maximum
const maxOfTwoNumbers = (numero1, numero2) => {
  if (numero1 > numero2) return numero1;
  return numero2;
};

// Finding Longest Word
const findLongestWord = arrayWords => {
  if (arrayWords.length > 0) {
    let longestWord = '';
    for (let i = 0; i < arrayWords.length; i++) {
      let word = arrayWords[i];
      if (word.length > longestWord.length) longestWord = word;
    }
    return longestWord;
  }
};

let words = [
  'mystery',
  'brother',
  'aviator',
  'crocodile',
  'pearl',
  'orchard',
  'crackpot'
];

// Calculating a Sum
const sumArray = arrayNumbers => {
  if (arrayNumbers.length > 0) {
    return arrayNumbers.reduce((total, number) => {
      return (total += number);
    });
  }
  return 0;
};

let numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

// Calculate the Average
const averageNumbers = arrayNumbers => {
  if (arrayNumbers.length > 0)
    return sumArray(arrayNumbers) / arrayNumbers.length;
};
let numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

// Array of Strings
const averageWordLength = arrayWords => {
  if (arrayWords.length > 0) {
    let numWords = arrayWords.length;
    let sum = arrayWords.reduce((total, word) => {
      return (total += word.length);
    }, 0);
    return sum / numWords;
  }
};

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

// Unique Arrays
const uniquifyArray = arrayWords => {
  if (arrayWords.length > 0) {
    let arrayUnicos = [];
    arrayWords.forEach(word => {
      if (!(arrayUnicos.indexOf(word) >= 0)) arrayUnicos.push(word);
    });
    return arrayUnicos;
  }
};

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

// Finding Elements
const doesWordExist = (arrayWords, word) => {
  for (let i = 0; i < arrayWords.length; i++) {
    if (arrayWords[i] === word) return true;
  }
  return false;
};
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

// Counting Repetion
const howManyTimes = (arrayWords, word) => {
  if (arrayWords.length > 0) {
    let repeticiones = 0;
    arrayWords.forEach(wordOnArray => {
      if (wordOnArray === word) repeticiones++;
    });
    return repeticiones;
  }
};
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
// Bonus Quest
const greatestProduct = matriz => {
  let productResult = 0;
  let arrayResult;
  let rows = matriz.length;
  let cols = matriz[0].length;
  let numElems = 4;
  // Búsqueda en filas:
  for (let row = 0; row < rows; row++) {
    let product = maxProductArrayNElements(matriz[row], numElems);
    if (product > productResult) productResult = product;
  }
  // Búsqueda en columnas:
  let traspuesta = getMatrizTraspuesta(matriz);
  rows = traspuesta.length;
  for (let row = 0; row < rows; row++) {
    let product = maxProductArrayNElements(traspuesta[row], numElems);
    if (product > productResult) productResult = product;
  }
  // Búsqueda de diagonales (1) IZQ/DER-->DESC
  let diagonales = getDiagonalesMatriz(matriz);
  for (let i = 0; i < diagonales.length; i++) {
    let diagonal = diagonales[i];
    if (diagonal.length >= numElems) {
      let product = maxProductArrayNElements(diagonal, numElems);
      if (product > productResult) productResult = product;
    }
  }
  // Búsqueda de diagonales (2) IZQ/DER-->ASC
  let reverseMatrix = matriz.reverse();
  diagonales = getDiagonalesMatriz(reverseMatrix);
  for (let i = 0; i < diagonales.length; i++) {
    let diagonal = diagonales[i];
    if (diagonal.length >= numElems) {
      let product = maxProductArrayNElements(diagonal, numElems);
      if (product > productResult) productResult = product;
    }
  }
  return productResult;
};

const maxProductArrayNElements = (array, numElems) => {
  let product = 0;

  if (array.length >= numElems) {
    for (let j = 0; j < array.length - (numElems - 1); j++) {
      let subArray = array.slice(j, j + numElems);
      let newProduct = subArray.reduce((total, number) => {
        return total * number;
      }, 1);
      if (newProduct > product) product = newProduct;
    }
  }

  return product;
};

const getMatrizTraspuesta = matriz => {
  let traspuesta = [];
  let rows = matriz.length;
  let cols = matriz[0].length;
  for (let i = 0; i < cols; i++) traspuesta.push([]);
  for (let col = 0; col < cols; col++) {
    for (let row = 0; row < rows; row++) {
      traspuesta[col].push(matriz[row][col]);
    }
  }
  return traspuesta;
};

const getDiagonalesMatriz = matriz => {
  let diagonales = [];
  let rows = matriz.length;
  let cols = matriz[0].length;
  for (let row = rows - 1; row >= 0; row--) {
    let diagonal = [];
    let col = 0;
    let _row = row + 0;
    while (col < cols && _row < rows) {
      diagonal.push(matriz[_row][col]);
      col++;
      _row++;
    }
    // for (let col = 0; col < cols - row; col++) {
    //   diagonal.push(matriz[row][col]);
    // }
    diagonales.push(diagonal);
  }
  for (let col = 0; col < cols; col++) {
    let diagonal = [];
    let _col = col + 0;
    let row = 0;
    while (_col < cols && row < rows) {
      diagonal.push(matriz[row][_col]);
      _col++;
      row++;
    }
    // for (let row = 0; row < rows - col; row++) {
    //   diagonal.push(matriz[row][col]);
    // }
    diagonales.push(diagonal);
  }
  return diagonales;
};

let matrix = [
  [8, 2, 22, 97, 38, 15, 0, 40, 0, 75, 4, 5, 7, 78, 52, 12, 50, 77, 91, 8],
  [
    49,
    49,
    99,
    40,
    17,
    81,
    18,
    57,
    60,
    87,
    17,
    40,
    98,
    43,
    69,
    48,
    4,
    56,
    62,
    0
  ],
  [
    81,
    49,
    31,
    73,
    55,
    79,
    14,
    29,
    93,
    71,
    40,
    67,
    53,
    88,
    30,
    3,
    49,
    13,
    36,
    65
  ],
  [52, 70, 95, 23, 4, 60, 11, 42, 69, 24, 68, 56, 1, 32, 56, 71, 37, 2, 36, 91],
  [
    22,
    31,
    16,
    71,
    51,
    67,
    63,
    89,
    41,
    92,
    36,
    54,
    22,
    40,
    40,
    28,
    66,
    33,
    13,
    80
  ],
  [
    24,
    47,
    32,
    60,
    99,
    3,
    45,
    2,
    44,
    75,
    33,
    53,
    78,
    36,
    84,
    20,
    35,
    17,
    12,
    50
  ],
  [
    32,
    98,
    81,
    28,
    64,
    23,
    67,
    10,
    26,
    38,
    40,
    67,
    59,
    54,
    70,
    66,
    18,
    38,
    64,
    70
  ],
  [
    67,
    26,
    20,
    68,
    2,
    62,
    12,
    20,
    95,
    63,
    94,
    39,
    63,
    8,
    40,
    91,
    66,
    49,
    94,
    21
  ],
  [
    24,
    55,
    58,
    5,
    66,
    73,
    99,
    26,
    97,
    17,
    78,
    78,
    96,
    83,
    14,
    88,
    34,
    89,
    63,
    72
  ],
  [21, 36, 23, 9, 75, 0, 76, 44, 20, 45, 35, 14, 0, 61, 33, 97, 34, 31, 33, 95],
  [78, 17, 53, 28, 22, 75, 31, 67, 15, 94, 3, 80, 4, 62, 16, 14, 9, 53, 56, 92],
  [
    16,
    39,
    5,
    42,
    96,
    35,
    31,
    47,
    55,
    58,
    88,
    24,
    0,
    17,
    54,
    24,
    36,
    29,
    85,
    57
  ],
  [86, 56, 0, 48, 35, 71, 89, 7, 5, 44, 44, 37, 44, 60, 21, 58, 51, 54, 17, 58],
  [
    19,
    80,
    81,
    68,
    5,
    94,
    47,
    69,
    28,
    73,
    92,
    13,
    86,
    52,
    17,
    77,
    4,
    89,
    55,
    40
  ],
  [4, 52, 8, 83, 97, 35, 99, 16, 7, 97, 57, 32, 16, 26, 26, 79, 33, 27, 98, 66],
  [
    88,
    36,
    68,
    87,
    57,
    62,
    20,
    72,
    3,
    46,
    33,
    67,
    46,
    55,
    12,
    32,
    63,
    93,
    53,
    69
  ],
  [
    4,
    42,
    16,
    73,
    38,
    25,
    39,
    11,
    24,
    94,
    72,
    18,
    8,
    46,
    29,
    32,
    40,
    62,
    76,
    36
  ],
  [
    20,
    69,
    36,
    41,
    72,
    30,
    23,
    88,
    34,
    62,
    99,
    69,
    82,
    67,
    59,
    85,
    74,
    4,
    36,
    16
  ],
  [
    20,
    73,
    35,
    29,
    78,
    31,
    90,
    1,
    74,
    31,
    49,
    71,
    48,
    86,
    81,
    16,
    23,
    57,
    5,
    54
  ],
  [1, 70, 54, 71, 83, 51, 54, 69, 16, 92, 33, 48, 61, 43, 52, 1, 89, 19, 67, 48]
];
