const createMovieRate = require('./createRate');
const createMovieDescription = require('./createDescription');
const createMovieGenre = require('./createGenre');

function createMovieFooter(movie) {
  const cardFooter = document.createElement('div');
  cardFooter.classList.add('p-2');

  const cardRate = createMovieRate(movie);
  cardFooter.appendChild(cardRate);
  
  const cardDescription = createMovieDescription(movie);
  cardFooter.appendChild(cardDescription);

  const cardGenre = createMovieGenre(movie);
  cardFooter.appendChild(cardGenre);

  return cardFooter;
}

module.exports = createMovieFooter;