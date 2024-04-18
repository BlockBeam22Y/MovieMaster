const axios = require('axios');
const renderCards = require('./renderCards');
const displayErrorAlert = require('./displayErrorAlert');

module.exports = function () {
  axios.get('http://localhost:3000/movies')
      .then(res => renderCards(res.data))
      .catch(err => displayErrorAlert(err));
};