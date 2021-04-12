const db = require('../../utils/database');
const languages = require('../../data/languages.json');

exports.populate = async () => {
  console.log('Inserindo idiomas...');

  const data = languages;
  let sql = '';

  for (const [index, value] of data.entries()) {
    try {
      sql = `INSERT INTO idiomas VALUES (
        ${value.id},
        ${value.name ? `"${value.name}"` : null},
        ${value.iso_639_1 ? `"${value.iso_639_1}"` : null}
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

  console.log(`${data.length} idiomas inseridos!`);
};
