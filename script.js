'use strict';

// удаляем рекламу
let advertising = document.querySelector('.adv');
advertising.remove();

// восстанавливаем порядок книг
let book = document.querySelectorAll('.book');
book[1].after(book[0]);
book[4].after(book[3]);
book[5].after(book[2]);

// заменяем заголовок
let paragraph = book[4].querySelector('h2');
paragraph.textContent = 'Книга 3. this и Прототипы Объектов';

// заменяем картинку
let body = document.querySelector('body');
body.style.backgroundImage = 'url(./image/adv.jpg)';

// меняем порядок в пятой книге
let element = book[5].querySelectorAll('li');
element[1].after(element[9]);
element[4].after(element[2]);
element[8].before(element[5]);

// меняем порядок во второй книге
let elementTwo = book[0].querySelectorAll('li');
elementTwo[3].after(elementTwo[6]);
elementTwo[4].before(elementTwo[8]);
elementTwo[10].before(elementTwo[2]);

// добавляем восьмую главу шестой книге
let list = document.querySelectorAll('ul');
let elementList = list[5].querySelectorAll('li');
console.log(elementList);
let newElement = document.createElement('li');
newElement.textContent = 'Глава 8: За пределами ES6';
list[5].append(newElement);
elementList[9].before(newElement);
