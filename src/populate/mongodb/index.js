const movies = require('./movies');
const cast = require('./cast');
const productionCompanies = require('./productionCompanies');
const ratings = require('./ratings');

(async function () {
  const handler = 'ratings';

  switch (handler) {
    case 'movies':
      await movies.populate();
      break;
    case 'cast':
      await cast.populate();
      break;
    case 'productionCompanies':
      await productionCompanies.populate();
      break;
    case 'ratings':
      await ratings.populate();
      break;
    default:
      break;
  }
})();
