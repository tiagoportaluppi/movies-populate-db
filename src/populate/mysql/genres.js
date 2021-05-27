const db = require('../../../utils/persistence/mysql');
const genres = require('../../../data/genres.json');

exports.populate = async () => {
  console.log('Inserindo gêneros...');

  const data = genres;
  let sql = '';

  for (const [index, value] of data.entries()) {
    try {
      sql = `INSERT INTO generos VALUES (
        ${value.id},
        ${value.name ? `"${value.name}"` : null}
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

  console.log(`${data.length} gêneros inseridos!`);
};
