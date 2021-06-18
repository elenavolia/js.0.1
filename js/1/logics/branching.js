// if (condition) { тело  console.log('дальше')}
if (5 > 30) {
  console.log('win - win'); 
}
console.log('loose');


// if ... else

if (50 > 30) {
  console.log('x > y');
} else {
  console.log('x < y');
}
 
// if...else if (condition) 

const salary = 1000;
if (salary < 500) {
  console.log('Уровень 1');
} else if (salary > 500 && salary < 1500) {
  console.log('Уровень 2');
} else if (salary > 1500 && salary < 3000) {
  console.log('Уровень 3')
} else {
  console.log('Уровень 4');
};

// тернарный оператор

const balance = 100;
let message;

if (balance >= 0) {
  message = 'Позитивный баланс';
} else {
  message = 'Негативный баланс';
}
console.log(message);

// сокращаем - const message = условие ? если правда : если нет;
const message2 = balance >= 0 ? 'Позитивный баланс' : 'Негативный баланс'
console.log(message2);