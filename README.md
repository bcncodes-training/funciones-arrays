## Ejercicio con Testing

### Qué es el testing?

El *testing* de software consiste en el proceso de ejecutar una aplicación para validar y verificar que se cumplen los requerimientos técnicos y funcionales exigidos.

El *testing* es un proceso y no una actividad aislada. El proceso de diseñar tests en el comienzo del desarrollo ayuda a prevenir deficiencias en el código o en el diseño del producto.

En este ejercicio los tests están creados y sólo es necesario ejecutarlos y crear el código que cubra todos los requerimientos.

### Testing con Jasmine

![Jasmine Logo](https://i.imgur.com/A1pop7h.png)

**Jasmine** es un framework de testing automatizado para JavaScript. Se esta diseñado para utilizarse en programación BDD (behavior-driven development) que se basa en poner el foco en los procesos de negocio en lugar de en los detalles técnicos.

### Uso

La estructura del código inicial del ejercicio consiste en:

```
starter-code/
├── jasmine
│   ├── jasmine-2.8.0/
│   |   └── ...
├── src
│   └── functions-and-arrays.js
├── tests
│   └── FunctionsAndArraysSpec.js
└─ SpecRunner.html
```
Tienes que trabajar en el fichero `funciones-arrays.js` del directorio `src`. En la carpeta `jasmine` se encuentran los archivos que componen Jasmine, que están ligados con el fichero `SpecRunner.html`.

**Ejecución de los tests**

Para correr los tests de Jasmine hay que abrir el fichero `SpecRunner.html` en el navegador, aparecerá una imagen como la siguiente:

![image](./testing.png)

**Pasar los tests**

Hay que escribir el código siguiendo las instrucciones y, poco a poco se deben pasar todos los tests.

No se trata de pasar todos los tests a la vez. Hay que leer detenidamente lo que se pide en cada iteración, resolviendo los errores de uno en uno

Cuando se programa con tests es muy importante leer y entender los errores que devuelve cada test, es la manera de saber que hay que codificar.

## Entrega

Hay que hacer pull request del fichero `funciones-arrays.js` que pase todos los tests.

## Iteraciones

### 1. Encuentra el máximo

Define una función `maxOfTwoNumbers` que tome dos números como argumentos y devuelva el mayor.

### 2. Encuentra la palabra más larga

Escribe una función `findLongestWord` que tome un array de palabras y devuelva la más larga. Si hay 2 con la misma longitud, debería devolver la primera. 


**Código de partida**

```javascript
let words = [
  'mystery',
  'brother',
  'aviator',
  'crocodile',
  'pearl',
  'orchard',
  'crackpot'
];
```

### 3. Calcula la suma 

Itera sobre un array sumando cada elemento.

Semanticamente [reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce) es el mejor método para hacer esta operación, aunque se puede utilizar cualquier tipo de bucle de los que hemos visto.

Crea una función `sumArray` que tome un array de números como parámetro y calcule la suma de todos sus miembros:

**Código de partida**

```javascript
let numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
```

### 4. Calcula la media aritmética

Para ello sigue el siguiente algoritmo:

1. Utiliza la suma del ejercicio anterior y divídela por el número de elementos.

#### 4.1: Array de Números

Escribe una función `averageNumbers` que reciba un array de números y calcule la media de los números:

**Código de partida**

```javascript
let numbers = [2, 6, 9, 10, 7, 4, 1, 9];
```

#### 4.2: Array of Strings

Escribe una función `averageWordLength` que reciba un array de palabras y calcule la media de la longitud de las palabras:

**Código de partida**

```javascript
let words = [
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
```

### 5. Unique Arrays

Coge el siguiente array, elimina los duplicados y devuelve un nuevo array. Si lo necesitas consulta la función [`indexOf`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf).

Realiza este ejercicio como una fución `uniquifyArray` que reciba un array de palabras como parámetro.

**Código de partida**

```javascript
let words = [
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

```

### 6. Busca elementos

Escribe una función `doesWordExist` que reciba un array de palabras como argumento y una palabra para buscar dentro del array. Devuelve `true` si existe, sino devuelve `false`. **No** utilices `indexOf` en este caso.

**Código de partida**

```javascript
let words = [
  'machine',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'truth',
  'disobedience'
];
```

### 7. Cuenta repeticiones

Escribe una función `howManyTimes` que tome un array de palabras como argumento y una palabra para buscar. La función devolverá el número de veces que una palabra aparece en el array.

**Código de partida**

```javascript
let words = [
  'machine',
  'matter',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'matter',
  'truth',
  'disobedience'
  'matter'
];
```

### X. Bonus Quest

Cual es el producto mayor de cuatro números adyacentes? Consideramos adyacentes cualquier grupo de cuatro números en `horizontal`, `vertical` o `diagonal`.

Por ejemplo, si tenemos una matriz de 5x5 como:

```
[ 1,  2, 3, 4, 5]
[ 1, 20, 3, 4, 5]
[ 1, 20, 3, 4, 5]
[ 1, 20, 3, 4, 5]
[ 1,  4, 3, 4, 5]
```

El mayor producto será `20`x`20`x`20`x`4` = `32,000`;

Escribe una función `greatestProduct` para encontrar el producto mayor en la matriz de 20×20 siguiente!

```javascript
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
```
### Soluciones Roberto

Realizado una refactorización del código que Miquel y yo realizamos en Julio. NO PASA TODOS LOS TEST DE JASMINE!!! pero todas las funciones cumplen su cometido!!
