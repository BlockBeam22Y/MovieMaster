function createMovieDescription(movie) {
  const { director, duration } = movie;

  const cardDescription = document.createElement('div');
  cardDescription.classList.add('text-center', 'py-2');

  const cardDirector = document.createElement('p');
  cardDirector.innerHTML = `<span class="font-weight-bold">Director:</span> ${director}`;
  cardDirector.classList.add('card-text', 'm-0');
  cardDescription.appendChild(cardDirector);

  const cardDuration = document.createElement('p');
  cardDuration.innerHTML = `<span class="font-weight-bold">Duración:</span> ${duration}`;
  cardDuration.classList.add('card-text', 'm-0');
  cardDescription.appendChild(cardDuration);

  return cardDescription;
}

module.exports = createMovieDescription;