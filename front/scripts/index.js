function createMovieCard(movie) {
    const { title, year, director, duration, genre, rate, poster } = movie;

    const cardLink = document.createElement('a');
    cardLink.href = '';
    cardLink.classList.add('movie-link');

    const card = document.createElement('div');
    card.classList.add('movie-card');

    const cardTitle = document.createElement('h3');
    cardTitle.innerHTML = title;
    cardTitle.classList.add('movie-title');
    card.appendChild(cardTitle);
    
    const cardImage = document.createElement('img');
    cardImage.src = poster;
    cardImage.alt = title;
    cardImage.classList.add('movie-image');
    card.appendChild(cardImage);

    const cardYear = document.createElement('p');
    cardYear.innerHTML = `Año: ${year}`;
    cardYear.classList.add('movie-year');
    card.appendChild(cardYear);

    const cardDirector = document.createElement('p');
    cardDirector.innerHTML = `Director: ${director}`;
    cardDirector.classList.add('movie-director');
    card.appendChild(cardDirector);

    const cardDuration = document.createElement('p');
    cardDuration.innerHTML = `Duración: ${duration}`;
    cardDuration.classList.add('movie-duration');
    card.appendChild(cardDuration);

    const cardGenre = document.createElement('p');
    cardGenre.innerHTML = `Géneros: ${genre.join(', ')}`;
    cardGenre.classList.add('movie-genre');
    card.appendChild(cardGenre);

    const cardRate = document.createElement('p');
    cardRate.innerHTML = `Calificación: ${rate}/10`;
    cardRate.classList.add('movie-rate');
    card.appendChild(cardRate);

    cardLink.appendChild(card);

    return cardLink;
}

const cardContainer = document.querySelector('.movie-container');
cardContainer.innerHTML = '';

const cards = tempData.map(createMovieCard);

cards.forEach(card => {
    cardContainer.appendChild(card);
})