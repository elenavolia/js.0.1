/*Напиши скрипт который проверяет возможность открыть час с пользователем.
Для этого пользователь длолжен быть:
* - другом
* - онлайн
* - без режима не беспокоить

*/

const isOnline = true;
const isFriend = true;
const isDnd = false;

const canOpenchat = isOnline && isFriend && !isDnd;
console.log('Можно открыть чат?', canOpenchat);

