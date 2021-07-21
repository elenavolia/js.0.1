/*
 * Array.prototype.map()
 * - Поэлементо перебирает оригинальный массив
 * - Не изменяет оригинальный массив
 * - Возвращает новый массив такой же длины
 */

const numbers = [5, 10, 15, 20, 25];

const doubledNums = numbers.map(function (number) { 
  console.log(number);
  return number * 2;
});
console.log('numbers', numbers);
console.log('doubledNums', doubledNums);





const players = [
  { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
  { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
  { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
  { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
  { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
];
console.table(players);

/*
 * Получаем массив имён всех игроков
 */

const playerNames = players.map(player => { 
  console.log(player);
  return player.name
});

//еще проще 
const playerNames1 = players.map(player => player.name);

  
console.log('playerNames', playerNames);
console.log('playerNames1', playerNames1);
  

const playerIds =players.map(player => player.id)
console.log('playerIds', playerIds);


/*
 * Увеличиваем кол-во поинтов каждого игрока на 10%
 */

const upatedPlayers = players.map(player => ({
    //то что нужно скопировать (весь массив)
    ...player,
    //то что нужно изменить
    points: player.points*1.1,
  
}));
console.table(upatedPlayers);
console.log(upatedPlayers);

/*
 * Увеличиваем кол-во часов игрока по id
 */

const playerIdToUpdate = 'player-3';

//длинно:
// const updatedPlayers = players.map(player => {
//   console.log(player.id);
//   if (playerIdToUpdate === player.id) {
//     console.log(`Вот я нашел того самого и это ${playerIdToUpdate}, обновляй его без жалости!!!`)
//     return {
//         //'тут будет обновленный обект'
//       ...player,
//       timePlayed: player.timePlayed + 100
//     }
  
//   }
//   //это будет старый объект:
//   return player;
// })

//короче и тоже верно:
// const updatedPlayers = players.map(player => {
//   return playerIdToUpdate === player.id
//     ? {
//       ...player,
//       timePlayed: player.timePlayed + 100
//     }
//     : player;
// });

//совсем коротко:
const updatedPlayers = players.map(player => 
   playerIdToUpdate === player.id
    ? { ...player, timePlayed: player.timePlayed + 100}
    : player,
);

console.table(updatedPlayers);