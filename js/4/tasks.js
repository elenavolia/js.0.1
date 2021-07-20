/*
 * Напиши функцию calculateTotalPrice(items)
 * которая принимает массив цен (чисел) и возвращает их сумму
 */


 //дано:

const cart = [54, 28, 105, 70, 92, 17, 120, 12, 25, 90];
let total = 0;

for (const value of cart) {
  total += value;
}

console.log('Total: ', total);


// console.log(`Общая сумма покупок ${r1}`); // 6
// console.log(calculateTotalPrice([5, 10, 15, 20])); // 50
// console.log(calculateTotalPrice([100, 200, 300])); // 600

//решение:

const calculateTotalPrice = function (items) { 
  console.log('items: ', items);
  let total = 0;

  for (const item of items) {
    total += item;    

    
  }
  return total;
};

const r1 = calculateTotalPrice([1, 2, 3]); // 6
const r2 = calculateTotalPrice([5, 10, 15, 20]); // 50
const r3 = calculateTotalPrice([100, 200, 300]); // 600



//не правильно
// console.log(calculateTotalPrice([1, 2, 3])); // 6
// console.log(calculateTotalPrice([5, 10, 15, 20])); // 50
// console.log(calculateTotalPrice([100, 200, 300])); // 600
console.log(`общая сумма покупок ${r1}`);
console.log(`общая сумма покупок ${r2}`);
console.log(`общая сумма покупок ${r3}`);

/*
 * Напиши функцию logItems(items) для перебора и логирования массива
 */

const logItems = function (items) {
  for (const item of items) {
    console.log(item);
  }
};

logItems(['Mango', 'Kiwi', 'Poly', 'Ajax']);
logItems([1, 2, 3, 4, 5]);
logItems(['клавиатура', 'наушники', 'часы']);


/*
 * Напиши функцию findLogin(allLogins, login) для поиска логина
 * - Если логина нет, вывести сообщение 'Пользователь [логин] не найден.'
 * - Если нашли логин, вывести сообщение 'Пользователь [логин] найден.'
 */


 //дано:
const logins = ['m4ngoDoge', 'k1widab3st', 'poly1scute', 'aj4xth3m4n'];
//const loginToFind = 'aj4xth3m4n';

// const message = logins.includes(loginToFind)
//     ? `Пользователь ${loginToFind} найден.`
//     : `Пользователь ${loginToFind} не найден.`;

// console.log(message);

// console.log(findLogin(logins, 'avocod3r'));
// console.log(findLogin(logins, 'k1widab3st'));
// console.log(findLogin(logins, 'jam4l'));
// console.log(findLogin(logins, 'poly1scute'));

//решение:

const findLogin = function (allLogins, loginToFind) {
  console.log(allLogins);
  console.log(loginToFind);

 //СЛОЖНЫЙ ВАРИант:
 
  // не правильно:
  //let message = `Пользователь ${loginToFind} не найден.`;

  for (const login of allLogins) {
    if (login === loginToFind) {
      // не правильно:
     // message = `Пользователь ${loginToFind} найден.`;
      //правильно:
      return `Пользователь ${loginToFind} найден.`;
    }
    
  }
  //вместо let
  return `Пользователь ${loginToFind} не найден.`;
};
 
console.log(findLogin(logins, 'avocod3r'));
console.log(findLogin(logins, 'k1widab3st'));
console.log(findLogin(logins, 'jam4l'));
console.log(findLogin(logins, 'poly1scute'));

//простой 

const findLogin1 = function (allLogins, loginToFind) {
  return allLogins.includes(loginToFind)
    ? `Пользователь1 ${loginToFind} найден.`
    : `Пользователь1 ${loginToFind} не найден.`;
}
  
 
console.log(findLogin1(logins, 'avocod3r'));
console.log(findLogin1(logins, 'k1widab3st'));
console.log(findLogin1(logins, 'jam4l'));
console.log(findLogin1(logins, 'poly1scute'));



//дано:
/*
 * Напиши функцию findSmallesNumber(numbers) для поиска самого маленького числа в массиве,
 * при условии что числа уникальные (не повторяются).
 */
// const numbers = [51, 18, 13, 24, 7, 85, 19];

//   let smallestNumber = numbers[0];

//   for (const number of numbers) {
//     if (number < smallestNumber) {
//       smallestNumber = number;
//     }
// };

//console.log ('smallestNumber is ', smallestNumber);


//console.log(findSmallesNumber([3, 8, 12, -2, 15])); // -2
//console.log(findSmallesNumber([100, 54, 8, 12, 47])); // 8
//console.log(findSmallesNumber([7, 21, 84, 15, 4])); // 4

//решение:

let smallestNumber = 0;

const findSmallestNumber = function (numbers) {
  let smallestNumber = numbers[0];
  for (const number of numbers) {
    if (number < smallestNumber) {
      smallestNumber = number;
    }
  }
  return smallestNumber;
}

console.log ('smallestNumber = ', smallestNumber);

console.log(findSmallestNumber([3, 8, 12, -2, 15])); // -2
console.log(findSmallestNumber([100, 54, 8, 12, 47])); // 8
console.log(findSmallestNumber([7, 21, 84, 15, 4])); // 4


//дано:

/*
 * Напиши функцию changeCase(string) которая заменяет регистр
 * каждого символа в строке на противоположный.
 * Например, если строка «JavaScript», то на выходе должена быть строка «jAVAsCRIPT».
 */

// const string = 'qWeRTzxCv';
// // const letters = string.split('');
//  let invertedString = '';


//   for (const letter of letters) {
//     const isEqual = letter === letter.toLowerCase();

//     invertedString += isEqual
//       ? letter.toUpperCase()
//       : letter.toLowerCase();
//   }

// console.log('invertedString: ', invertedString);

// console.log(changeCase('qweRTY')); // QWErty
// console.log(changeCase('mAnGo')); // MaNgO
// console.log(changeCase('AjAx')); // aJaX

//решение:


const changeCase = function (string) {

 const letters = string.split('');
 
   let invertedString = '';

  for (const letter of letters) {
 
   // const isInLowerCase = letter === letter.toLowerCase();

    const isInLowerCase = letter === letter.toLowerCase();
    invertedString += isInLowerCase
      ? letter.toUpperCase()
      : letter.toLowerCase();
  }

  return invertedString;
};

console.log(changeCase('qweRTY')); // QWErty
console.log(changeCase('mAnGo')); // MaNgO
console.log(changeCase('AjAx')); // aJaX


//дано
/*
 * Напиши функцию slugify(string) которая получает строку и возвращает URL-slug
 * Строка состоит только из букв и пробелов
 */

// const title = 'Top 10 benefits of React framework';

// const normalizedTitele = title.toLowerCase();
// const words = normalizedTitele.split(' ');
// const slug = words.join('-');
// const slug1 = title.toLowerCase().split(' ').join('-');

// console.log(slug1);

// console.log(slugify('Top 10 benefits of React framework'));
// console.log(slugify('Azure Static Web Apps are Awesome'));
// console.log(slugify('Technical writing tips for non-native English speakers'));

//решение


const slugify = function (string) {

 //   const normalizedTitele = title.toLowerCase();
// const words = normalizedTitele.split(' ');
//   const slug = words.join('-');
//   return slug;
  return string.toLowerCase().split(' ').join('-');
}


console.log(slugify('Top 10 benefits of React framework'));
console.log(slugify('Azure Static Web Apps are Awesome'));
console.log(slugify('Technical writing tips for non-native English speakers'));



// const slugify = function (string) {
//   // const normalizedString = string.toLowerCase();
//   // const words = normalizedString.split(' ');
//   // const slug = words.join('-');
//   // return slug;

//   return string.toLowerCase().split(' ').join('-');
// };



//дано

/*
 * Псевдомассив arguments и Array.from и ...
 */

// const fn = function () { };
// fn(1, 2, 3);
// fn(1, 2, 3, 4, 5);
// fn(1, 2, 3, 4, 5, 6, 7);

//решение
const fn = function (...args) {
// ...имя - преобразует все значения в массив
  //старый метод: 
  //console.log(arguments);
  // const args = Array.from(arguments);
  console.log('arguments: ',args)
};
fn(1, 2, 3);
fn(1, 2, 3, 4, 5);
fn(1, 2, 3, 4, 5, 6, 7);



/*
 * Напиши функцию add для сложения произвольного количества аргументов (чисел)
  * Array.from
 * - Операция ... (rest)
 */

//const add = function () {};
const add = function (...args1) {
  console.log('arguments1: ', args1);
  let total = 0;
  for (const arg of args1) { total += arg }
  return total;
};

console.log(add(1, 2, 3));
console.log(add(1, 2, 4, 5, 6));



//дано
/*
 * Напиши функцию filterNumbers(array [, number1, ...]) которая:
 * - первым аргументом принимает массив чисел
 * - после первого аргумента может быть произвольное количество других аргументов которые будут числами.
 * - Функция должна вернуть новый массив, в котором будут только те аргументы, начиная со второго,
 *   для которых есть аналог в оригинальном массиве.
 */



//const filterNumbers = function () {};

// console.log(filterNumbers([1, 2, 3, 4, 5], 10, 15, 2, 3, 8)); // [2, 3]
// console.log(filterNumbers([10, 15, 25, 30], 23, 30, 18, 15)); // [30, 15]
// console.log(filterNumbers([100, 200, 300, 400, 500], 7, 12, 200, 64)); // [200]

//решение
const filterNumbers = function (array, ...args2) { 
  // console.log('array: ', array);
  // console.log('arguments2: ', args2);

  const unuqueElements = [];

  for (const element of array) {
    if (args2.includes(element)) {
      unuqueElements.push(element);
      console.log(`${element} есть везде!!!`);
    }
    
    
  }
  return unuqueElements;
};

console.log(filterNumbers([1, 2, 3, 4, 5], 10, 15, 2, 3, 8)); // [2, 3]
console.log(filterNumbers([10, 15, 25, 30], 23, 30, 18, 15)); // [30, 15]
console.log(filterNumbers([100, 200, 300, 400, 500], 7, 12, 200, 64)); // [200]