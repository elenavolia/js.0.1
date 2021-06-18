

const age = 10;
const totalPrice = 200.74;
const userMame = 'Chelsy';
const message = 'Добро пожаловать!';
const isOpen = true;
const shouldConfirm = false;


/*вызовет окно с одной опцией "ок" пока пользователь не нажмет - код остановлен*/

console.log('до', totalPrice);
alert('уведомление');
console.log('после');

/*методы window.confirm() 
 вызовет окно в котороп у пользователя 2 опции - cansel=false(в консоли)/ok=true
 пока пользователь не нажмет - код остановлен

*/
const shouldRenew = confirm('Хотите продлить подписку ?');
/*и widow.promt()
вызовет окно в котором есть строка для ввода (динамический ввод)
*/
let quantity = prompt('Введите количество товаров');
quantity = Number(quantity);
console.log(quantity);
console.log(typeof quantity);

/*
parseInt метод
вынять числовое значение из элемеента
читает слева направа и выводит первое число, если нет - NaN

*/ let elementWidth = '500px';
const result = Number.parseInt(elementWidth);
console.log(result);

/* или  */

let elemenHeight = '500.75px';
elemenHeight = Number.parseInt(elemenHeight);
console.log('elemenHeight: ',elemenHeight);


/*
parseFloat метод
вынять не целое (вкл ".") числовое значение из элемеента
читает слева направа и выводит первое число, если нет - NaN
*/

let elemenSmth = '500.75px';
elemenSmth = Number.parseFloat(elemenSmth);
console.log('elemenSmth: ',elemenSmth);

/*
число.tiFixed(digts)
привести кол-во символов после "." к нужному к-ву
читает слева направа и выводит первое число, если нет - NaN
*/
const salary = 123.1234567;
console.log(salary.toFixed(2));

/* или
создаст переменную, отсечет все что после 2 знака за . , преобразует сроку в число
отсекает лишнее, 
*/

let costs = 322.123456;
costs = costs.toFixed(2);
costs = Number(costs);
console.log(costs);

/* матрешка - краткое изложение
let costs = 322.123456;
costs = Number(costs.toFixed(2));
console.log(costs);

или еще короче
console.log(Number(costs.toFixed(2)));

*/

/* обьект Math - считает, делает простые вычисления
Math.pow - возведение в степень
Exponent operator = **, то же самое что Math.pow
sqrt - квадратный корень
*/

const base = 2;
const power = 5;
const summary = Math.pow(base, power);
console.log(summary);
console.log(7 ** 5);




