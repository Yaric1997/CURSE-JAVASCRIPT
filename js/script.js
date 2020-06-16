"use strict";
const numberOfFilms = +prompt('Сколько фильмов ви уже посмотрели?', '');
const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};
