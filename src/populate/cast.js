const db = require('../../utils/database');
const genres = require('../../data/cast.json');

exports.populate = async () => {
  console.log('Inserindo atores...');

  const data = genres;
  let sql = '';

  for (const [index, value] of data.entries()) {
    try {
      sql = `INSERT INTO atores VALUES (
        ${value.id},
        ${value.name ? `"${value.name}"` : null},
        ${value.gender}
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

  console.log(`${data.length} atores inseridos!`);
};
