const csv = require('csvtojson');
const fs = require('fs');
const { convertStringToJson } = require('../../utils/convertStringToJson');

exports.init = async () => {
  const data = await csv().fromFile('csv/movies_metadata.csv');

  const json = [];

  for (const x of data) {
    try {
      const languages = convertStringToJson(x.spoken_languages, 'array') || [];
      const movieId = parseInt(x.id);

      for (const [i, y] of languages.entries()) {
        const generatedId = i + 1;
        const index = json.findIndex(({ id }) => id === generatedId);
        if (index >= 0) {
          json[index].movieIds = [...json[index].movieIds, movieId];
        } else {
          json.push({
            movieIds: [movieId],
            id: generatedId,
            ...y,
            name: y.iso_639_1 === 'yi' ? 'Yiddish' : y.name,
          });
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
