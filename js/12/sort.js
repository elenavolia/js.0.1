/*
 * Array.prototype.sort(callback(currentEl, nextEl){})
 * - Сортирует и ИЗМЕНЯЕТ оригинальный массив
 * - По умолчанию:
 *    - сортирует по возрастанию
 *    - приводит элементы к строке и сортирует по [Unicode](https://unicode-table.com/en/)
 */

const numbers = [1, 9, 6, 2, 3];
// numbers.sort();
// console.log('numbers', numbers);

const letters = ['b', 'B', 'a', 'A'];
letters.sort();
console.log('letters', letters);

/*
 * compareFunction - функция сравнения (callback)
 * Элементы массива сортируются в соответствии с её возвращаемым значением
 *  - eсли compareFunction(A, B) меньше 0, сортировка поставит A перед B
 *  - если compareFunction(A, B) больше 0, сортировка поставит B перед A
 *  - если compareFunction(A, B) вернёт 0, сортировка оставит A и B на неизменными по отношению друг к другу, но отсортирует их по отношению ко всем другим элементам.
 */

// numbers.sort((curEl, nextEl) => {
//     return nextEl - curEl;
// });

/*
 * Как сделать копию массива чтобы не сортировать оригинальный
 * - Array.prototype.slice()
 * - Операция spread
 */

 //длинно:
// const copy = [...numbers];
// console.log(copy);
// copy.sort();
// console.log('copy: ', copy);
// console.log('numbers: ', numbers)

//коротко:
const ascSortedNumbers = [...numbers].sort();
const descSortedNumbers = [...numbers].sort((a, b) => b - a);
console.log('ascSortedNumbers: ', ascSortedNumbers);
console.log('descSortedNumbers: ', descSortedNumbers);
console.log('numbers: ', numbers)


/*
 * Кастомная сортировка сложных типов
 */
const players = [
    { id: 'player-1', name: 'Mango', timePlayed: 310, online: false },
    { id: 'player-2', name: 'Poly', timePlayed: 470, online: true },
    { id: 'player-3', name: 'Aiwi', timePlayed: 230, online: true },
    { id: 'player-4', name: 'Ajax', timePlayed: 150, online: false },
    { id: 'player-5', name: 'Chelsey', timePlayed: 80, online: true },
];

// По игровому времени
const sortedByBestPlayers = [...players].sort((aPlayer, bPlayer) => {
  return aPlayer.timePlayed - bPlayer.timePlayed;
});
console.table(sortedByBestPlayers);

const sortedByWostPlayers = [...players].sort((aPlayer, bPlayer) => {
  return bPlayer.timePlayed - aPlayer.timePlayed;
});
console.table(sortedByWostPlayers);

const byName = [...players].sort((a, b) => {
  console.log(a.name.charCodeAt(0));
  //пишет индекс буквы в чисельном значении
  const result = a.name[0] > b.name[0];
  if (result) { return 1 };
  if (!result) { return -1 };
});
console.table(byName);
