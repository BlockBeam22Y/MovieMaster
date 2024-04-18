const createMovieFooter = require('./createFooter');

function createMovieCard(movie) {
  const { title, year, poster } = movie;

  const cardLink = document.createElement('a');
  cardLink.href = '#';
  cardLink.classList.add('movie-link');

  const card = document.createElement('div');
  card.classList.add('movie-card');
  
  const cardHeader = document.createElement('h3');
  cardHeader.innerHTML = `${title} (${year})`;
  cardHeader.classList.add('movie-header', 'px-3', 'py-2');
  card.appendChild(cardHeader);
  
  const cardImage = document.createElement('img');
  cardImage.src = poster;
  cardImage.alt = title;
  cardImage.classList.add('card-img-top');
  card.appendChild(cardImage);
  
  const cardFooter = createMovieFooter(movie);
  card.appendChild(cardFooter);

  cardLink.appendChild(card);

  return cardLink;
}

module.exports = createMovieCard;