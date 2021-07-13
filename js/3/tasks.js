//посчитать общую сумму покупок в корзине

const cart = [54, 28, 105, 70, 92, 17, 120];

// 1. перебрать массив
//2. сделать переменную тотал до цикла

let total = 0;
//3. каждый эл=т приплюс к тотал

for (let i = 0; i < cart.length; i += 1) { 
  //console.log(cart[i]);

  total += cart[i];
};

console.log('Total: ', total);

// то же самое но короче:

for (const value of cart) {
  total += value;
}

console.log('Total: ', total);

//добавить такс

for (let i = 0; i < cart.length; i += 1) { 
 // cart[i] *= 1.2;
  cart[i] = Math.round(cart[i] * 1.2);};
console.log(cart);

// Напиши скрипт который подсчитывает сумму всех четных чисел в массиве.

const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 11];

// 1. переменная тотал
// 2. перебрать массив
// 3. на каждой итеррации провериь элемент на четность
// 4. если четный - плюсуем к тотал

let total1 = 0;
for (let i = 0; i < numbers.length; i += 1) {
  console.log(numbers[i]);

  if (numbers[i] % 2 ===0) {
    console.log('Четное!!!!');

    total1 += numbers[i];
  }
}

let total2 = 0;

// короче:
for (const number of numbers) {
  //console.log(number);

  if (number % 2 !== 0) {
    console.log('NEЧетное!!!!', number);

    total2 += number;
  }

} console.log('Total counted: ', total1);
console.log('Total uncounted: ', total2);


/*
 * Напиши скрипт поиска логина
 * - Если логина нет, вывести сообщение 'Пользователь [логин] не найден.'
 * - Если нашли логин, вывести сообщение 'Пользователь [логин] найден.'
 *
 * - Сначала через for
 * - Потом через for...of
 * - Логика break
 * - Метод includes() с тернарным оператором
 */

const logins = ['m4ngoDoge', 'k1widab3st', 'poly1scute', 'aj4xth3m4n'];
const loginToFind = 'm4ngoDoge';
let message = '';

//for

// for (let i = 0; i < logins.length; i += 1) {
//   const login = logins[i];
  
//   if (login === loginToFind)
//   {message = `Пользователь ${loginToFind} найден`
//     break; 
//   }
//   else {message = `Пользователь ${loginToFind} не найден`  };
// };
// console.log(message);

//for (const iterator of object) {
  


// for (const login of logins) {

//   console.log('Login: ', login);
//   console.log(`${login}` === `${loginToFind}`, login === loginToFind);

//   if (login === loginToFind) {
//     console.log('Ура, равны!');
//     message = `Пользователь ${loginToFind} найден`
//     break;
//   } else {message = `Пользователь ${loginToFind} не найден`};
// }
// console.log(message);

//

//includes+

console.log(logins.includes(loginToFind));

//тернарный оператор декларативный код

const message1 = logins.includes(loginToFind) ? `Пользователь ${loginToFind} найден` : `Пользователь ${loginToFind} не найден`;
console.log(message1);

// *
//  * Напиши скрипт поиска самого маленького числа в массиве,
//  * при условии что числа уникальные (не повторяются).
//  */

const numbers1 = [51, 18, 13, 24, 7, 85, 19];

let smallestNumber = numbers1[0];


for (const number1 of numbers1) {
  // console.log(number1);

  if (number1 < smallestNumber) {
    smallestNumber = number1;
  }
  
}
console.log('smallestNumber: ', smallestNumber);

/*
 * Напиши скрипт, который объединяет все элементы массива в одно строковое значение.
 * Элементов может быть произвольное кол-во.
 * Пусть элементы массива  в строке будут разделены запятой.
 * - Сначала через for
 * - Потом через join()
 */

const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax'];
// let string = '';

// for (const friend of friends) {
//   string += friend  + ',' + ' ';
// }
// //console.log(string.slice(0, string.length - 2)); = не верно

// string = string.slice(0, string.length - 2);

//можно сделать проще:

const string = friends.join(', ');

console.log(string);
// Должно получиться 'Mango,Poly,Kiwi,Ajax'

/*
 * Напиши скрипт который заменяет регистр каждого символа в строке на противоположный.
 * Например, если строка «JavaScript», то на выходе должена быть строка «jAVAsCRIPT».
 */

const string1 = '«JavaScript»';
const letters = string1.split('');
//новая строка
let invertedString = '';

console.log(letters);

for (const letter of letters) {
  console.log(letter);
  
  //длинно: 
  //if (letter === letter.toLowerCase()) {
  //   console.log('Эта буква в нижнем регистре!', letter);

  //   invertedString += letter.toUpperCase();
  // } else {
  //   console.log('Эта буква в верхнем регистре!', letter);
  //   invertedString += letter.toLowerCase();
  // }

//короче

  invertedString += letter === letter.toLowerCase()
    ? letter.toUpperCase()
    : letter.toLowerCase();
}

console.log('invertedString: ', invertedString);



/*
 * Делаем slug в URL из названия статьи (например на dev.to)
 * Заголовок статьи состоит только из букв и пробелов
 *
 * - Нормализируем строку
 * - Разбиваем по словам
 * - Сшиваем в строку с разделителями
 */

// Должно получиться top-10-benefits-of-react-framework
const title = 'Top 10 benefits of React framework';

const normalizedTitel = title.toLowerCase();
const words = normalizedTitel.split(' ');
console.log(words);
const slug = words.join('-');
console.log('slug; ', slug);

//короче:

const slug1 = title.toLowerCase().split(' ').join('-');
  console.log('slug1: ', slug1);


  /*
 * Напиши скрипт который считает сумму элементов двух массивов.
 */

const array1 = [5, 10, 15, 20];
const array2 = [10, 20, 30];
let total3 = 0;

//неправильно:
// for (let i = 0; i < array1.length; i += 1) {
//   console.log(array1[i]);
//   console.log(array2[i]);
// }

//сложно:
for (let i = 0; i < array1.length; i += 1) {
  total3 += array1[i];
}
for (let i = 0; i < array2.length; i += 1) {
  total3 += array2[i];
}
console.log('total3: ', total3);


//сшить методом concat:

const numbers2 = array1.concat(array2);
console.log(numbers2);

for (const number of numbers2) {
  total3 += number;
  
}
console.log('total: ', total3);


/*
 * Работем с коллекцией карточек в trello
 * - Метод splice()
 * - Удалить
 * - Добавить
 * - Обновить
 */

const cards = [
  'Карточка-1',
  'Карточка-2',
  'Карточка-3',
  'Карточка-4',
  'Карточка-5',
];

console.table(cards);

/*
 * Удаление (по индексу), метод indexOf()
 */

 //найдем индекс элементов
const cardToRemove = 'Карточка-3';
const index1 = cards.indexOf(cardToRemove);
console.log(index1);
cards.splice(index1, 1);
console.table(cards);

/*
 * Добавление (по индексу)
 */
const cardToInsert = 'Карточка-6';
const index = 3;

// cards.splice(3, 0, 5, 10, 20);
// // 3 - куда вставить, 0 - что удалять
// console.table(cards);

cards.splice(index, 0, cardToInsert);
// 3 - куда вставить, 0 - что удалять
console.table(cards);


/*
 * Обновление (по индексу)
 */
const cardToUpdate = 'Карточка-4';

cards.splice(2, 1, 555);
console.table(cards);

const index4 = cards.indexOf(cardToUpdate);
cards.splice(index4, 1, 'обновленная Карточка-4');
console.table(cards);