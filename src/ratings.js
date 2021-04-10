// require('../utils/database')
const csv = require('csvtojson');
const fs = require('fs');

exports.init = async () => {
  const data = await csv().fromFile('csv/ratings_small.csv');

  console.log(data.length);
  fs.writeFileSync('data/ratings.json', JSON.stringify(data, null, 2));
};
