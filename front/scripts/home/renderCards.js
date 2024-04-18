const createMovieCard = require('./movieCard/createCard');

function renderCards(data) {
  const cardContainer = document.querySelector('.movie-container');
  cardContainer.innerHTML = '';

  const cards = data.map(createMovieCard);

  if (cards.length) {
    cards.forEach(card => {
      cardContainer.appendChild(card);
    });
  } else {
    cardContainer.innerHTML = 'No se encontraron películas';
  }
}

module.exports = renderCards;