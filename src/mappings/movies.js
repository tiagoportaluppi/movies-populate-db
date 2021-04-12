const csv = require('csvtojson');
const fs = require('fs');
const { normalizeString } = require('../../utils/normalizeString');

exports.init = async () => {
  const data = await csv().fromFile('csv/movies_metadata.csv');

  const json = [];

  for (const x of data) {
    try {
      json.push({
        id: parseInt(x.id),
        original_title: normalizeString(x.original_title),
        title: normalizeString(x.title),
        budget: parseFloat(x.budget),
        homepage: x.homepage,
        original_language: x.original_language,
        overview: normalizeString(x.overview),
        popularity: parseFloat(x.popularity),
        release_date: x.release_date,
        revenue: parseFloat(x.revenue),
        runtime: parseFloat(x.runtime),
        status: x.status,
        tagline: normalizeString(x.tagline),
        vote_average: parseFloat(x.vote_average),
        vote_count: parseInt(x.vote_count),
        imdb_id: x.imdb_id,
        adult: x.adult && x.adult.toLowerCase() === 'true',
      });
    } catch (error) {
      console.log(error.message);
      break;
    }
  }

  console.log(json.length);
  fs.writeFileSync('data/movies.json', JSON.stringify(json, null, 2));
};
