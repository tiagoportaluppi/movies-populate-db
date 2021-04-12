const csv = require('csvtojson');
const fs = require('fs');

exports.init = async () => {
  const data = await csv().fromFile('csv/ratings_small.csv');

  const json = [];

  for (const x of data) {
    try {
      json.push({
        userId: parseInt(x.userId),
        movieId: parseInt(x.movieId),
        rating: parseFloat(x.rating),
        timestamp: parseInt(x.timestamp),
      });
    } catch (error) {
      console.log(error.message);
      break;
    }
  }

  console.log(json.length);
  fs.writeFileSync('data/ratings.json', JSON.stringify(json, null, 2));
};
