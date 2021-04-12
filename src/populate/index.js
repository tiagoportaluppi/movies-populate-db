const db = require('../../utils/database');

const movies = require('./movies');
const genres = require('./genres');
const genresMovies = require('./genresMovies');
const cast = require('./cast');
const castMovies = require('./castMovies');
const keywords = require('./keywords');
const keywordsMovies = require('./keywordsMovies');
const ratings = require('./ratings');
const countries = require('./countries');
const countriesMovies = require('./countriesMovies');
const productionCompanies = require('./productionCompanies');
const productionCompaniesMovies = require('./productionCompaniesMovies');
const languages = require('./languages');
const languagesMovies = require('./languagesMovies');

(async function () {
  await db.connect();

  const handler = 'castMovies';

  switch (handler) {
    case 'movies':
      await movies.populate();
      break;
    case 'genres':
      await genres.populate();
      break;
    case 'genresMovies':
      await genresMovies.populate();
      break;
    case 'cast':
      await cast.populate();
      break;
    case 'castMovies':
      await castMovies.populate();
      break;
    case 'keywords':
      await keywords.populate();
      break;
    case 'keywordsMovies':
      await keywordsMovies.populate();
      break;
    case 'ratings':
      await ratings.populate();
      break;
    case 'countries':
      await countries.populate();
      break;
    case 'countriesMovies':
      await countriesMovies.populate();
      break;
    case 'productionCompanies':
      await productionCompanies.populate();
      break;
    case 'productionCompaniesMovies':
      await productionCompaniesMovies.populate();
      break;
    case 'languages':
      await languages.populate();
      break;
    case 'languagesMovies':
      await languagesMovies.populate();
      break;
    default:
      break;
  }
})();
