// require('../utils/database')
const csv = require('csvtojson');
const fs = require('fs');
const { convertStringToJson } = require('../utils/convertStringToJson');

exports.init = async () => {
  const data = await csv().fromFile('csv/movies_metadata.csv');

  const json = [];

  for (const x of data) {
    try {
      for (const y of convertStringToJson(x.production_companies, 'array')) {
        if (!json.some(({ id }) => id === y.id)) {
          json.push({ movieId: parseInt(x.id), ...y });
        }
      }
    } catch (error) {
      console.log(error.message);
      break;
    }
  }

  console.log(json.length);
  fs.writeFileSync('data/production_companies.json', JSON.stringify(json, null, 2));
};
