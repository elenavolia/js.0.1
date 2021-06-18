/* Написать скрипт проверки подписки пользователя дпри доступе к контенту
* - Есть 3 типа подписки: free, pro и vip.
* - Получить доступ могут только  pro и vip.
*/

const newLocal = 'pro';
const sub = newLocal;
const canAccesContent = sub === 'pro' || sub==='vip';
console.log('Есть доступ к контенту?', canAccesContent);