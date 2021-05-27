const db = require('../../../utils/persistence/mysql');
const countries = require('../../../data/countries.json');

exports.populate = async () => {
  console.log('Inserindo relação de países e filmes...');

  const data = countries;
  let sql = '';

  for (const [index, value] of data.entries()) {
    for (const movieId of value.movieIds) {
      try {
        sql = `INSERT INTO paises_filmes VALUES (
          ${value.id},
          ${movieId}
        )`;

        await db.query(sql);
        console.log(`${index} | SUCCESS`);
      } catch (error) {
        if (error.message.startsWith('ER_DUP_ENTRY')) {
          console.log(`${index} | ALREADY EXISTS`);
        } else {
          console.log(`${index} | ERROR - `, sql);
          console.error(error.message);
          throw error;
        }
      }
    }
  }

  console.log(`Relações inseridas!`);
};
