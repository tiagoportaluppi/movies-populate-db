const { ObjectId } = require('mongodb');
const mongo = require('../../../utils/persistence/mongodb');
const productionCompanies = require('../../../data/mongo/production_companies.json');

exports.populate = async () => {
  const db = await mongo.getConnection();
  const col = await db.collection('produtoras');

  console.log('Inserindo produtoras...');

  const data = productionCompanies;
  let document = null;

  for (const [index, value] of data.entries()) {
    try {
      document = {
        _id: new ObjectId(value._id),
        // produtora_id: value.id,
        nome: value.name ? value.name : null,
      };

      await col.insertOne(document);
      console.log(`${index} | SUCCESS`);
    } catch (error) {
      console.log(`${index} | ERROR - `, document);
      console.error(error.message);
      throw error;
    }
  }

  console.log(`${data.length} produtoras inseridas!`);
};
