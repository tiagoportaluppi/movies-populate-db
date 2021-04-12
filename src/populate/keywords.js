const db = require('../../utils/database');
const keywords = require('../../data/keywords.json');

exports.populate = async () => {
  console.log('Inserindo keywords...');

  const data = keywords;
  let sql = '';

  for (const [index, value] of data.entries()) {
    try {
      sql = `INSERT INTO keywords VALUES (
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

  console.log(`${data.length} keywords inseridas!`);
};
