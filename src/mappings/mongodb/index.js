const productionCompanies = require('./productionCompanies');
const cast = require('./cast');
const movies = require('./movies');

const handler = 'movies';

switch (handler) {
  case 'productionCompanies':
    productionCompanies.init();
    break;
  case 'cast':
    cast.init();
    break;
  case 'movies':
    movies.init();
    break;
  default:
    break;
}
