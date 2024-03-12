const createMovieCard = require('./createMovieCard');

function renderCards(data) {
  const cardContainer = document.querySelector('.movie-container');
  cardContainer.innerHTML = '';

  const cards = data.map(createMovieCard);

  cards.forEach(card => {
      cardContainer.appendChild(card);
  });
}

module.exports = renderCards;