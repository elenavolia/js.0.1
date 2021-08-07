/*
 * isEmpty()
 */

console.log(_.isEmpty({}));
console.log(_.isEmpty({a: 1}));



/*
 * get()
 *
 * - user && user.location && obj.location.city
 * - user?.location?.city
 */

const user = {
  name: 'mango',
  location: {
    coords: [1, 2],
    city: 'Lviv',
  },
};

//более универсальный
console.log(_.get(user, 'location.city'));
// только если знаем 100% путь
console.log(user.location.city);

//длинно и старо
if (user && user.location && user.location.city) { 
  console.log(user.location.city)
}
//ново:
console.log(user?.location?.city);


/*
 * union()
 */

 console.log(_.union([1,2,3], [1,2,4,5,6]))

/*
 * range()
 */
console.log(_.range(1, 6, 2));
console.log(_.range(20, 50, 3));

/*
 * sortBy()
 */

 const users = [
  { 'user': 'fred',   'age': 48 },
  { 'user': 'barney', 'age': 36 },
  { 'user': 'fred',   'age': 40 },
  { 'user': 'barney', 'age': 34 }
];

console.log(_.sortBy(users, user =>user.age))
/*
 * sum() и sumBy()
 */
console.log(_.sum([1, 2, 3, 4, 5]));

const players = [
    { id: 'player-1', name: 'Mango', timePlayed: 310, online: false },
    { id: 'player-2', name: 'Poly', timePlayed: 470, online: true },
    { id: 'player-3', name: 'Aiwi', timePlayed: 230, online: true },
    { id: 'player-4', name: 'Ajax', timePlayed: 150, online: false },
    { id: 'player-5', name: 'Chelsey', timePlayed: 80, online: true },
];

console.log(_.sumBy(players, player => player.timePlayed));

/*
 * uniq() и uniqBy()
 * sortedUniq() и sortedUniqBy()
 */

/*
 * random()
 */

/*
 * min() и max()
 * minBy() и maxBy()
 */
//старый
console.log(Math.min(...[1, 2, 3, 4, 5]));
//легче
console.log('worstPlayer', _.minBy(players,player =>player.timePlayed))
/*
 * camelCase(), capitalize(), kebabCase(), lowerCase(), upperCase()
 */

console.log(_.kebabCase(' a b c '));