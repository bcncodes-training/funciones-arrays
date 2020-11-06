//"...eres como una balanza con las pesas colgando por dentro..."(37º, Radio Futura);
"use strict"

// funciones aprendidas desde el curso MEAN
/**********************Max num out of two0********************************** */
//Feb 2020
//Ternary and my ñove for them
const maxOfTwoNumbers = (n1, n2) => (n1 > n2 || n1 === n2) ? n1 : n2;

/*******************Arr of string and its length ******************************/

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

//Feb 2020 
//good old for loop stil as valid, never forget it!
// sort 
const largeWord = (arr) => arr.sort((a, b) => b.length - a.length)[0];
console.log(largeWord(words));

//reduce
const largeWord2 = (arr) => arr.reduce((a, b) => (a.length > b.length ? a : b), '');
console.log(largeWord2(words));

/*********************SUM ******************************************/
let numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

//Feb 2020 reduce Method
const sumArray = (num) => num.reduce((a, b) => a + b, 0);
console.log(sumArray(numbers));

/***********************AVERAGE **************************/
let numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

//Feb 2020 Reduce
const averageNumbers = (num) => (num.length == 0) ? undefined : num.reduce((a, b) => a + b, 0) / num.length;
console.log(averageNumbers(numbersAvg));

/****************************** AVERAGE STRINGS ARRAY************************/
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

//reduce (Feb 2020)
const averageWordLength1 = (arr) => arr.reduce((a, b) => (a + b.length), 0) / arr.length;
console.log(averageWordLength1(wordsArr));

//join (Feb 2020)
const averageWordLength2 = (arr) => arr.join('').length / arr.length;
console.log(averageWordLength2(wordsArr));

/**************************************one word only!! ****************************************/
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

// Loop (Junio 2019)
function uniquifyArray(arr){
    //container
    let unique = {};
  
      //iteracion
      arr.forEach((i) =>{
        //si no coincides con nada dentro del obj
        if(!unique[i]){
          //para dentro!
          unique[i] = true;
        }
      });
      //https://javascript.info/keys-values-entries
      return Object.keys(unique);
  
   };
  console.log(uniquifyArray(wordsUnique));

//Filter
const uniquifyArray1 = (arr) => arr.filter((a, i) => arr.indexOf(a) === i);
console.log(uniquifyArray1(wordsUnique));

/*******************************HOW MANY TIMES AR U REPEATED **********************/
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

//Filter
const howManyTimes1 = (arr, val) => arr.filter((e) => (e === val)).length;
console.log(howManyTimes1(wordsCount, 'matter'));

//remember, in reduce a => accumulator and b => currentValue!!!
const howManyTimes2 = (arr) => arr.reduce((a, b) => ((a[a.findIndex(d => d.element === b)] || a[a.push({element: b, count:0})-1]).count++, a), []);
console.log(howManyTimes2(wordsCount));

//new Map. Liked because offers me key=> value! =>returns Map(kind of obj mind me!)
const howManyTimes3 = (arr) => arr.reduce((a, b) => a.set(b, a.get(b) + 1 || 1), new Map);
console.log(howManyTimes3(wordsCount));
