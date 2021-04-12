const csv = require('csvtojson');
const fs = require('fs');
const { convertStringToJson } = require('../../utils/convertStringToJson');

exports.init = async () => {
  const data = await csv().fromFile('csv/movies_metadata.csv');

  const json = [];

  for (const x of data) {
    try {
      const companies = convertStringToJson(x.production_companies, 'array') || [];
      const movieId = parseInt(x.id);

      for (const y of companies) {
        const index = json.findIndex(({ id }) => id === y.id);
        if (index >= 0) {
          json[index].movieIds = [...json[index].movieIds, movieId];
        } else {
          json.push({ movieIds: [movieId], ...y });
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
