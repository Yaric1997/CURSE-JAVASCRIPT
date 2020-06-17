// "use strict";
const numberOfFilms = +prompt('Сколько фильмов ви уже посмотрели?', '');
const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};


/*for (let i = 0; i < 2; i++){
  const a = prompt('Один ин просмотрених фильмов?', ''),
        b = prompt('На сколько оцените его?', '');

  if (a != null && b != null && a !== '' && b !== '' && a.length < 50){
    personalMovieDB.movies[a] = b;
    console.log('done');
  } else {
    console.log('error');
    i--;
  }
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

while (let  i < 2; i++){
  const a = prompt('Один ин просмотрених фильмов?', ''),
        b = prompt('На сколько оцените его?', '');

  if (a != null && b != null && a !== '' && b !== '' && a.length < 50){
    personalMovieDB.movies[a] = b;
    console.log('done');
  } else {
    console.log('error');
    i--;
  }
  if (personalMovieDB.count < 10 ){
    console.log('Watch little films');
  }else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('You classic watcher');
  }else if (personalMovieDB.count >= 30){
    console.log('You kinofan');
  }else {
    console.log('Error');
  }
}*/
let  i;
do {
  const a = prompt('Один ин просмотрених фильмов?', ''),
        b = prompt('На сколько оцените его?', '');

  if (a != null && b != null && a !== '' && b !== '' && a.length < 50){
    personalMovieDB.movies[a] = b;
    console.log('done');
  } else {
    console.log('error');
    i--;
  }
  if (personalMovieDB.count < 10 ){
    console.log('Watch little films');
  }else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('You classic watcher');
  }else if (personalMovieDB.count >= 30){
    console.log('You kinofan');
  }else {
    console.log('Error');
  }
  i++;
}while (i < 2)
