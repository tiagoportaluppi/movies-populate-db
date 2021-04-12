const db = require('../../utils/database');
const productionCompanies = require('../../data/production_companies.json');

exports.populate = async () => {
  console.log('Inserindo produtoras...');

  const data = productionCompanies;
  let sql = '';

  for (const [index, value] of data.entries()) {
    try {
      sql = `INSERT INTO produtoras VALUES (
        ${value.id},
        ${value.name ? `"${value.name}"` : null},
        null
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

  console.log(`${data.length} produtoras inseridas!`);
};
