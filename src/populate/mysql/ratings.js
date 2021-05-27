const db = require('../../../utils/persistence/mysql');
const ratings = require('../../../data/ratings.json');

exports.populate = async () => {
  console.log('Inserindo avaliações...');

  const data = ratings;
  let sql = '';

  for (const [index, value] of data.entries()) {
    try {
      sql = `INSERT INTO avaliacoes VALUES (
        ${index + 1},
        ${value.rating || 0},
        ${value.movieId}
      )`;

      await db.query(sql);
      console.log(`${index} | SUCCESS`);
    } catch (error) {
      if (error.message.startsWith('ER_DUP_ENTRY')) {
        console.log(`${index} | ALREADY EXISTS`);
      } else if (error.message.startsWith('ER_NO_REFERENCED_ROW_2')) {
        console.log(`${index} | MOVIE NOT EXISTS`);
      } else {
        console.log(`${index} | ERROR - `, sql);
        console.error(error.message);
        throw error;
      }
    }
  }

  console.log(`${data.length} avaliações inseridas!`);
};
