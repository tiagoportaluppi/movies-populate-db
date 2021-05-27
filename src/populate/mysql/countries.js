const db = require('../../../utils/persistence/mysql');
const countries = require('../../../data/countries.json');

exports.populate = async () => {
  console.log('Inserindo países...');

  const data = countries;
  let sql = '';

  for (const [index, value] of data.entries()) {
    try {
      sql = `INSERT INTO paises VALUES (
        ${value.id},
        ${value.name ? `"${value.name}"` : ''},
        ${value.iso_3166_1 ? `"${value.iso_3166_1}"` : ''}
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

  console.log(`${data.length} países inseridos!`);
};
