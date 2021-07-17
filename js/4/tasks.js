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