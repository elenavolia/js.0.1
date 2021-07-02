//for

//for (инициализация - нач.знач; условие - прекращение цикла; пост - выражение) - что делать если условие = true { тело}

for (let i = 0; i < 5; i += 1) { console.log(i)};
console.log('вот и все')

//i +=1 это краткое описание i=i+1
// считать в обратную сторону - i -= 1

/*
 * Напиши скрипт который подсчитывает общую сумму зарплат работников.
 * Кол-во работников хранится в перемнной employees.
 * Зарплата каждого работника это случайное число от 500 до 5000
 * Записать сумму в переменную totalSalary и вывести в консоль
 */
// 1. сделать вары
// 2.перебрать работников в цикле
// 3.сгенеритть случайную зп
// 4. прибавить к тоталу
// 5.лог

const minSalary = 500;
const maxSalary = 5000;
const employees = 400;
let totalSalary = 0;

for (let i = 1; i <= employees; i += 1) {
  const salary = Math.round(Math.random() * (maxSalary - minSalary) + minSalary);
  console.log(`ЗП работника номер ${i} - ${salary}`);
  totalSalary += salary;

}
console.log('totalSalary: ', totalSalary);

 /*
 * Напиши скрипт который подсчитывает сумму всех чётных чисел,
 * которые входят диапазон чисел в переменных от min до max.
 * Например, если min=0 и max=5, то диапазон 0-5, и в нём два чётных числа - 2 и 4, их сумма 6.
 */

 //1. вары
 //2. фор от мин до макс с шагом 1
 //3. проверяем остаток от деления
 //4. пишем сумму

const min = 6;
const max = 13;
let total = 0;

// for (let i = min; i <= max; i += 1) {
 
// % остаток от деления  (i % 2 === 0) четное число
//if (i % 2 === 0) {
//     console.log('четное ', i);
//     total += i;
// }
// };
// console.log('total: ', total)


//от обратного:
//берем худший вариант
for (let i = min; i <= max; i += 1) {
  if (i % 2 !== 0) {
    console.log('Не четное ', i);
    continue;
  }
  console.log('четное', i);
  total += 1;
};
console.log('total: ', total)
