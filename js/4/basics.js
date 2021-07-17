
//создание функции - ничего не произойдет = создание функции:
const add = function (x, y) {
  console.log('x = ', x);
  console.log('y = ',y);
  //const result = x + y;
  //console.log('x+y:', result)
  console.log('выполняется функция Add')
  //возврат результа функции - тут функция остановится
 // return x + y;
};

//вызов функции:
add(2, 5);
add(7, 88);
add(39, 55);  
//правильно:
const r1 = add(5, 3);
console.log('r1: ', r1);
const r2 = add(76, 45);
 console.log('r2: ', r2);
const r3 = add(53, 35);
console.log('r3: ', r3);


const fnA = function () {
  console.log('Выполняется функция А');
  fnB();
};
const fnB = function () {
  console.log('Выполняется функция B');
  fnC();
};
const fnC = function () {
  console.log('Выполняется функция C');
  fnA();
};

fnA();
fnB();
fnC();




