function createMovieRate(movie) {
    const { rate } = movie;
    
    const rateContainer = document.createElement('div');
    rateContainer.classList.add('movie-rate');

    const rateBar = document.createElement('div');
    rateBar.classList.add('rate-bar');

    const rateBarContent = document.createElement('div');
    rateBarContent.style.width = `${10 * rate}%`;

    if (rate < 5) {
        rateBarContent.style.backgroundColor = 'red';
    } else if (rate < 7.5) {
        rateBarContent.style.backgroundColor = 'yellow';
    } else {
        rateBarContent.style.backgroundColor = 'green';
    }

    rateBarContent.classList.add('bar-content');
    rateBar.appendChild(rateBarContent);

    rateContainer.appendChild(rateBar);
    
    const rateLabel = document.createElement('p');
    rateLabel.innerHTML = `${rate}/10`;
    rateLabel.classList.add('rate-label');
    rateContainer.appendChild(rateLabel);
    
    return rateContainer;
}

function createMovieDescription(movie) {
    const { director, duration } = movie;

    const cardDescription = document.createElement('div');
    cardDescription.classList.add('movie-description');

    const cardDirector = document.createElement('p');
    cardDirector.innerHTML = `Director: ${director}`;
    cardDirector.classList.add('movie-director');
    cardDescription.appendChild(cardDirector);

    const cardDuration = document.createElement('p');
    cardDuration.innerHTML = `Duración: ${duration}`;
    cardDuration.classList.add('movie-duration');
    cardDescription.appendChild(cardDuration);

    return cardDescription;
}

function createMovieGenre(movie) {
    const { genre } = movie;
    
    const movieGenre = document.createElement('div');
    movieGenre.classList.add('movie-genre');
    
    genre.forEach(g => {
        const movieGenreSpan = document.createElement('span');
        movieGenreSpan.innerHTML = g;
        movieGenreSpan.classList.add('genre-span');
        movieGenre.appendChild(movieGenreSpan);
    });

    return movieGenre;
}

function createMovieFooter(movie) {
    const cardFooter = document.createElement('div');
    cardFooter.classList.add('movie-footer');

    const cardRate = createMovieRate(movie);
    cardFooter.appendChild(cardRate);
    
    const cardDescription = createMovieDescription(movie);
    cardFooter.appendChild(cardDescription);

    const cardGenre = createMovieGenre(movie);
    cardFooter.appendChild(cardGenre);

    return cardFooter;
}

function createMovieCard(movie) {
    const { title, year, poster } = movie;

    const cardLink = document.createElement('a');
    cardLink.href = '';
    cardLink.classList.add('movie-link');

    const card = document.createElement('div');
    card.classList.add('movie-card');
    
    const cardHeader = document.createElement('h3');
    cardHeader.innerHTML = `${title} (${year})`;
    cardHeader.classList.add('movie-header');
    card.appendChild(cardHeader);
    
    const cardImage = document.createElement('img');
    cardImage.src = poster;
    cardImage.alt = title;
    cardImage.classList.add('movie-image');
    card.appendChild(cardImage);
    
    const cardFooter = createMovieFooter(movie);
    card.appendChild(cardFooter);

    cardLink.appendChild(card);

    return cardLink;
}

function displayCards(data) {
    const cardContainer = document.querySelector('.movie-container');
    cardContainer.innerHTML = '';

    const cards = data.map(createMovieCard);

    cards.forEach(card => {
        cardContainer.appendChild(card);
    });
}

$.get('https://students-api.2.us-1.fl0.io/movies', displayCards);