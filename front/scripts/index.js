function createMovieRate(movie) {
    const { rate } = movie;
    
    const rateContainer = document.createElement('div');
    rateContainer.classList.add('movie-rate');

    const rateBar = document.createElement('div');
    rateBar.classList.add('rate-bar');

    const rateBarContent = document.createElement('div');
    rateBarContent.style.width = `${10 * rate}%`;

    if (rate < 4) {
        rateBarContent.classList.add('bg-danger');
    } else if (rate < 7) {
        rateBarContent.classList.add('bg-warning');
    } else {
        rateBarContent.classList.add('bg-success');
    }

    rateBarContent.classList.add('h-100');
    rateBar.appendChild(rateBarContent);

    rateContainer.appendChild(rateBar);
    
    const rateLabel = document.createElement('p');
    rateLabel.innerHTML = `${rate}/10`;
    rateLabel.classList.add('m-0', 'font-weight-bold');
    rateContainer.appendChild(rateLabel);
    
    return rateContainer;
}

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

function createMovieGenre(movie) {
    const { genre } = movie;
    
    const movieGenre = document.createElement('div');
    movieGenre.classList.add('movie-genre');
    
    genre.forEach(g => {
        const movieGenreSpan = document.createElement('span');
        movieGenreSpan.innerHTML = g;
        movieGenreSpan.classList.add('genre-span', 'p-1');
        movieGenre.appendChild(movieGenreSpan);
    });

    return movieGenre;
}

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

function createMovieCard(movie) {
    const { title, year, poster } = movie;

    const cardLink = document.createElement('a');
    cardLink.href = '';
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

function displayCards(data) {
    const cardContainer = document.querySelector('.movie-container');
    cardContainer.innerHTML = '';

    const cards = data.map(createMovieCard);

    cards.forEach(card => {
        cardContainer.appendChild(card);
    });
}

$.get('https://students-api.2.us-1.fl0.io/movies', displayCards);