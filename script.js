'use strict';

// удаляем рекламу
let advertising = document.querySelector('.adv');
advertising.remove();

// восстанавливаем порядок книг
let book = document.querySelectorAll('.book');
book[1].after(book[0]);
book[5].after(book[2]);
book[4].after(book[3]);

// заменяем картинку
let body = document.querySelector('body');
body.style.backgroundImage = 'url(./image/adv.jpg)';

// изменяем заголовок в книге 3
let paragraph = document.querySelectorAll('h2');
paragraph[2].textContent = "Книга 3. this и Прототипы Объектов";

// меняем порядок глав книга 2
let bookAreaOfVisibility = book[0];
let elementList = bookAreaOfVisibility.querySelectorAll('li');
elementList[3].insertAdjacentElement('afterend', elementList[6]);
elementList[4].insertAdjacentElement('afterbegin', elementList[8]);
elementList[9].insertAdjacentElement('afterend', elementList[2]);

// меняем порядок глав книга 5
let bookAsynchrony = book[5];
let elementsBookFive = bookAsynchrony.querySelectorAll('li');
elementsBookFive[4].insertAdjacentElement('afterend', elementsBookFive[2]);
elementsBookFive[1].insertAdjacentElement('beforeEnd', elementsBookFive[9]);
elementsBookFive[6].insertAdjacentElement('beforeBegin', elementsBookFive[2]);
elementsBookFive[2].insertAdjacentElement('beforeBegin', elementsBookFive[4]);
elementsBookFive[4].insertAdjacentElement('beforeBegin', elementsBookFive[3]);
elementsBookFive[3].insertAdjacentElement('beforeBegin', elementsBookFive[1]);
elementsBookFive[1].insertAdjacentElement('beforeBegin', elementsBookFive[0]);
elementsBookFive[7].after(elementsBookFive[5]);

// Добавляем новую главу к 6 книге

let list = document.querySelectorAll('ul');
let listEs = list[5];
let listItem = listEs.querySelectorAll('li');
console.log(list[5]);
let newElement = document.createElement('li');
newElement.textContent = 'Глава 8: За пределами ES6';
listEs.append(newElement);
console.log(listItem[9]);
newElement.insertAdjacentElement('beforeEnd', listItem[9]);