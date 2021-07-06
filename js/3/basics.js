const friends = ['Mango', 'Poly', 'Kiwi', 'Álex', 'Poly', 'Kiwi', 'Álex', 'Poly', 'Kiwi', 'Álex', 'Poly', 'Kiwi', 'Álex', 'Poly', 'Kiwi', 'Álex'];
console.table(friends);
const lastIndex = friends.length - 1;
console.log(lastIndex);
console.log(friends[2]);
friends[1] = 'Lena';
console.table(friends);

//перебрать массив
//изменить элемент массива
for (let i = 0; i <= friends.length - 1; i += 1) {
  console.log(i);
  console.log(friends[i]);
  friends[i] += `-${i}`;

}
console.table(friends);

//for(const variable of friends) {function act}

for (const friend of friends) { 
  console.log(friend);
};
