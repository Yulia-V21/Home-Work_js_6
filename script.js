/*1. Дана строка 'aaa@bbb@ccc'. Замените все @ на ! с помощью глобального
поиска и замены.*/

let str = 'aaa@bbb@ccc';
console.log(str.replace(/@/g,'!'));

/*2. В переменной date лежит дата в формате 2025-12-31. Преобразуйте эту
дату в формат 31/12/2025.*/

let str2 = '2025 - 12 - 31';
let str3 = str2.replace(/-/g, '/');
let strArr = str3.split('/');
let arrRev = strArr.reverse();
let arrStr = arrRev.join('/');
    console.log(arrStr);
/*Знаю, что нужно по-другому, но почему-то не сработало*/

/*3. Дана строка «Я учу javascript!». Вырежете из нее слово «учу» и слово
«javascript» тремя разными способами (через substr, substring, slice).*/

let strJs = 'Я учу javascript!';
console.log(strJs.substr(2,3),strJs.substr(6,10));
console.log(strJs.substring(2,5),strJs.substring(6,16));
console.log(strJs.slice(2,5),strJs.slice(6,16));

/*4. Дан массив с элементами 4, 2, 5, 19, 13, 0, 10. Найдите квадратный корень
из суммы кубов его элементов. Для решения воспользуйтесь циклом for.*/

let array = [4, 2, 5, 19, 13, 0, 10];
let arrCub = [];
let sum = 0;
for(let i = 0; i < array.length; i++) {
    arrCub.push(Math.pow(array[i],3));
    }
    for( let j = 0; j < arrCub.length; j++) {
        sum += +arrCub[j];
}

console.log(Math.sqrt(sum)); 

/*5. Даны переменные a и b. Отнимите от a переменную b и результат
присвойте переменной c. Сделайте так, чтобы в любом случае в переменную
c записалось положительное значение. Проверьте работу скрипта при a и b,
равных соответственно 3 и 5, 6 и 1.*/

let a = 3,
    b = 5;
 
let c = a - b;
if(c < 0 ) {
    console.log(Math.abs(c));
}else {
    console.log(c);
}

/*6. Выведите на экран текущую дату-время в формате 12:59:59 31.12.2014.
Для решения этой задачи напишите функцию, которая будет добавлять 0
перед днями и месяцами, которые состоят из одной цифры (из 1.9.2014
сделает 01.09.2014).*/


let dateNow = new Date();
let hour = dateNow.getHours(), 
    minute = dateNow.getMinutes(),
    seconds = dateNow.getSeconds(),
    year = dateNow.getFullYear(),
    month = dateNow.getMonth(),
    day = dateNow.getDay();

if(day.length = 1) {
        day = "0" + day;
}if(month.length >= 1) {
    month = "0" + month;
}

console.log(`${hour}:${minute}:${seconds} ${day}.${month}.${year}`);
 

/*7. Дана строка 'aa aba abba abbba abca abea'. Напишите регулярку, которая
найдет строки aba, abba, abbba по шаблону: буква 'a', буква 'b' любое
количество раз, буква 'a'.*/

let strAb = 'aa aba abba abbba abca abea';
let strChek = /[a][b]{1,10000}[a]/gi;
console.log(strAb.match(strChek));

/*8. Напишите ф-цию строгой проверки ввода номер телефона в
международном формате (<код страны> <код города или сети> <номер
телефона>). Функция должна возвращать true или false. Используйте
регулярные выражения.*/

function numberCheck(number) {

    if(!number) return false;

    let reg = /^\+?375 ?\(?(?:44|29|33|25)\)? ?[1-9]\d{2} ?-?\d{2} ?-?\d{2}$/;

    console.log(reg.test(number));
}
numberCheck('+375296575476');
numberCheck('37529657543456776');

/*9. Напишите ф-цию строгой проверки адреса эл. почты с учетом следующих
условия:
- весь адрес не должен содержать русские буквы и спецсимволы, кроме
одной «собачки», знака подчеркивания, дефиса и точки;
- имя эл. почты (до знака @) должно быть длиной более 2 символов, причем
имя может содержать только буквы, цифры, но не быть первыми и
единственными в имени;
- после последней точки и после @, домен верхнего уровня (ru, by, com и т.п.)
не может быть длиной менее 2 и более 11 символов.

Функция должна возвращать true или false. Используйте регулярные
выражения.*/

function emailCheck(email) {

    if (!email) return false;

 let regexp = /^[a-z0-9][a-z0-9._-]{0,28}[a-z0-9]@[a-z0-9][a-z0-9._]{1,11}\.[a-z]{2,11}$/gi;
 console.log(regexp.test(email));
}
emailCheck('yuliyavasileva21@gmail.com');
emailCheck('yuliyavasileva21Gmail.com');

/*10. Напишите ф-цию, которая из полного адреса с параметрами и без,
например: https://tech.onliner.by/2018/04/26/smart-do-200/?
utm_source=main_tile&utm_medium=smartdo200#zag3 , получит адрес
доменного имени (https://tech.onliner.by), остальную часть адреса без
параметров (/2018/04/26/smart-do-200/), параметры
(utm_source=main_tile&utm_medium=smartdo200) и хеш (#zag3). В адресе
может и не быть каких-либо составляющих. Ф-ция должна возвращать
массив.*/

function parseUrl(value) {
    
    if(!value) return false;

    let reg = /^(https?:\/\/)([a-z0-9][a-z.-]+[a-z0-9.-]+[a-z0-9]\.[a-z]{2,11})(\/[^?#\s]+\/?)?\/?(\?[^#\s]+)?(#[\w\d]+)?$/i;

    return value.match(reg);

}
console.log(parseUrl('https://tech.onliner.by/2018/04/26/smart-do-200/?utm_source=main_tile&utm_medium=smartdo200#zag3'));