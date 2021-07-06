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

//тернарный оператор

const message1 = logins.includes(loginToFind) ? `Пользователь ${loginToFind} найден` : `Пользователь ${loginToFind} не найден`;
console.log(message1);