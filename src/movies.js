// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  let directors = moviesArray.map((eachDirector) => {
    return eachDirector.director;
  });
  return directors;
}
// console.log(directors)
getAllDirectors(movies);

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  let spielbergFilms = moviesArray.filter((eachElem) => {
    if (
      eachElem.director === "Steven Spielberg" &&
      eachElem.genre.includes("Drama")
    ) {
      return true;
    } else {
      return false;
    }
  });

  return spielbergFilms.length;
}

howManyMovies(movies);
// console.log(howManyMovies(movies))

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  let scores = moviesArray.reduce((acc, elem) => {
    // console.log(acc, elem)
    return acc + elem.score;
  }, 0);

  let scoresAvg = scores / moviesArray.length;
  let twoDigit = scoresAvg.toFixed(2);
  let twoDigitNum = parseFloat(twoDigit);

  return twoDigitNum;
}
scoresAverage(movies);

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  let dramaFilter = moviesArray.filter((eachElem) => {
    if (eachElem.genre.includes("Drama")) {
      return true;
    } else {
      return false;
    }
  });
  return scoresAverage(dramaFilter);
}
scoresAverage(movies);

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  let cloneMoviesArray = JSON.parse(JSON.stringify(moviesArray));
  cloneMoviesArray.sort((elem2, elem1) => {
    if (elem2.year < elem1.year) {
      return -1;
    } else if (elem2.year > elem1.year) {
      return 1;
    } else {
      if (elem2.title < elem1.title) {
        return -1;
      } else if (elem2.title > elem1.title) {
        return 1;
      } else {
        return 0;
      }
    }
  });
  return cloneMoviesArray;
}
// console.log(orderByYear(movies));

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

let cloneMovArray = JSON.parse(JSON.stringify(moviesArray));


orderAlphabetically(movies);




// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
