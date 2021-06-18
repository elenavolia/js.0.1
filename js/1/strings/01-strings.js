const message = "В этой строке 26 символов.";
console.log(message, message.length);

/* Напиши скрипт который вывкдкт строку в пормате:
"Гость х у поселяется в z номер q",
подставив вместо x y z q значения переменных
*/

const firstName = 'Chelsy';
const lastName = 'Emerald';
const fullName = firstName + " " + lastName;
console.log(fullName);

const room = 716;
const type = "VIP";
const welcomeMsg = "Гость " + firstName + " " + lastName + ' поселяется в ' + type + ' номер ' + room;
console.log(welcomeMsg);

//шаблонные строки

const quantity = 15;
const orderMsg = `Вы заказываете ${ quantity } холодильников.`;
console.log(orderMsg);

const welcomeMsg1 = `Гость ${firstName} ${lastName} поселяется в ${type} номер ${room}`;
console.log(welcomeMsg1);

// Нормализация toLowerCase()

const brand = 'Samsung';
const normalizedBrand = brand.toLowerCase();
console.log(normalizedBrand);

//или
let brand1 = 'Sharp';
brand1 = brand1.toLowerCase();
console.log(brand1);

//или
let brand2 = prompt('Давай бренд');
brand2 = brand2.toLowerCase();
console.log(brand2);

// что бы не трогал 1 букву:

let brand3 = 'MoYoMoYo';
console.log(brand3[2]);
brand3 = brand3[0] + brand3.slice(1).toLowerCase();
console.log(brand3);


//метод includes - поиск в строке

const blacklistedWord1 = 'спам';
const blacklistedWord2 = 'распродажа';

const string1 = 'Привет, я принц Абдул, это не спам, предлагаю тебе миллион!';
const string2 = 'Самая большая РАСПРОДАЖА этой недели, не пропустите!';
const string3 = 'Рекламная кампания #fatlicesmaster';

console.log(string1.includes(blacklistedWord1));
console.log(string1.includes(blacklistedWord2));

console.log(string2.includes(blacklistedWord1));
const normalizedString2 = string2.toLowerCase();
console.log(normalizedString2.includes(blacklistedWord2));

//или console.log(string2.toLowerCase().includes(blacklistedWord2));


console.log(string3.includes(blacklistedWord1));
console.log(string3.includes(blacklistedWord2));

