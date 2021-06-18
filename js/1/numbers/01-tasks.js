/*
Напиши скрипт который просит пользователя ввести число и степеь возводит числов в эту степень и выводит результат в консоль
алгоритм:
1.Попросить пользователя ввести число и сохранить в переменную
2.Попросить пользователя ввести степень и сохранить в переменную
3. Возвести введенные данные в степерь и вывести
*/
let base = prompt('давай число');
base = Number(base);
console.log(base);

let power = prompt('давай степень');
base = Number(power);
console.log(power);

const result = base ** power;
console.log(result);

/*
Генерим псевдослучайные числа 
Math.random() - от 0 до 1
*/

console.log(Math.random());

/*
Генерим псевдослучайные числа в диапазоне
Math.random() * (max - min) + min
*/
console.log(Math.random() * (50 - 30) + 30);

//правильнее писать:

const max = 50;
const min = 30;

//console.log(Math.random() * (max - min) + min);

// что бы получть целое число Math.round()

console.log(Math.round((Math.random() * (max - min) + min)));