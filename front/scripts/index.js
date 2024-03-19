const axios = require('axios');
const renderCards = require('./renderCards');
const displayErrorAlert = require('./displayErrorAlert');

axios.get('https://students-api.2.us-1.fl0.io/movies')
    .then(res => renderCards(res.data))
    .catch(err => displayErrorAlert(err));