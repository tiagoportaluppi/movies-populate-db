const keywords = require('./keywords');
const ratings = require('./ratings');
const genres = require('./genres');
const countries = require('./countries');
const productionCompanies = require('./productionCompanies');
const languages = require('./languages');
const movies = require('./movies');

const handler = 'movies';

switch (handler) {
  case 'keywords':
    keywords.init();
    break;
  case 'ratings':
    ratings.init();
    break;
  case 'genres':
    genres.init();
    break;
  case 'countries':
    countries.init();
    break;
  case 'productionCompanies':
    productionCompanies.init();
    break;
  case 'languages':
    languages.init();
    break;
  case 'movies':
    movies.init();
    break;
  default:
    break;
}
