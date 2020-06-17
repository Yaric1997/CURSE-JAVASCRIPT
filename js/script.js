"use strict";
const numberOfFilms = +prompt('Сколько фильмов ви уже посмотрели?', '');
const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

// цикл для запису даних що ввів користувач
for (let i = 0; i < 2; i++){
  //модальні вікна запускаються по два рази
  const a = prompt('Один ин просмотрених фильмов?', ''),
        b = prompt('На сколько оцените его?', '');
  // умова коли нажата кнопку кансел, пусті строки, і довжина символів менше 50
  if (a != null && b != null && a !== '' && b !== '' && a.length < 50){
    //записується в DB і виводиться в консоль done в інакшому випадку error , і повертає для повторного введення
    personalMovieDB.movies[a] = b;
    console.log('done');
  } else {
    console.log('error');
    i--;
  }
  // якщо кількість менша 10 і виводиться повідомлення в консоль також коли більше рівне 10 але менше 30 і умова більше 30+ 3 умови
  // і якщо не підходить то виводиться повідомлення про помилку
  if (personalMovieDB.count < 10 ){
    console.log('Watch little films');
  }else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('You classic watcher');
  }else if (personalMovieDB.count >= 30){
    console.log('You kinofan');
  }else {
    console.log('Error');
  }
}
