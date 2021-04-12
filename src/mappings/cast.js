const csv = require('csvtojson');
const fs = require('fs');
const { convertStringToJson } = require('../../utils/convertStringToJson');

exports.init = async () => {
  const data = await csv().fromFile('csv/credits.csv');

  const json = [];
  const errors = [];

  for (const x of data) {
    try {
      const cast = convertStringToJson(x.cast, 'array') || [];
      const movieId = parseInt(x.id);

      for (const y of cast) {
        const index = json.findIndex(({ id }) => id === y.id);
        if (index >= 0) {
          json[index].movieIds = [...json[index].movieIds, movieId];
        } else {
          json.push({ movieIds: [movieId], ...y });
        }
      }
    } catch (error) {
      errors.push(x);
      // console.log(error.message);
      // break;
    }
  }

  console.log('Errors: ', errors.length);
  console.log(json.length);
  fs.writeFileSync('data/cast.json', JSON.stringify(json, null, 2));
};
