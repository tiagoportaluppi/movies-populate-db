// require('../utils/database')
const csv = require('csvtojson');
const fs = require('fs');
const { convertStringToJson } = require('../utils/convertStringToJson');

exports.init = async () => {
  const data = await csv().fromFile('csv/movies_metadata.csv');

  const json = [];

  for (const x of data) {
    try {
      for (const y of convertStringToJson(x.spoken_languages, 'array')) {
        if (!json.some(({ iso_639_1 }) => iso_639_1 === y.iso_639_1)) {
          json.push({ movieId: parseInt(x.id), ...y });
        }
      }
    } catch (error) {
      console.log(error.message);
      break;
    }
  }

  console.log(json.length);
  fs.writeFileSync('data/languages.json', JSON.stringify(json, null, 2));
};
