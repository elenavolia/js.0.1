const btnAAdd = document.querySelector('button[data-add]');
const resetBtn = document.querySelector('button[data-reset]');
const valueInput = document.querySelector('input[data-value]');

const outputEl = document.querySelector('.js-output span');
console.log(outputEl);

let total = 0;

btnAAdd.addEventListener('click', function () {
  console.log('clck eeee');

  const value = Number(valueInput.value);

  console.log(value);

  total += value;
  outputEl.textContent = total;
  
  console.log('total: ', total);

  valueInput.value = '';
 
});

resetBtn.addEventListener('click', function () {
  total = 0;
  outputEl.textContent = 0;
});
//console.dir(btnAAdd);