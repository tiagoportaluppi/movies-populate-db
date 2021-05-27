const { ObjectId } = require('mongodb');
const mongo = require('../../../utils/persistence/mongodb');
const cast = require('../../../data/mongo/cast.json');

exports.populate = async () => {
  const db = await mongo.getConnection();
  const col = await db.collection('atores');

  console.log('Inserindo atores...');

  const data = cast;
  let document = null;

  for (const [index, value] of data.entries()) {
    try {
      document = {
        _id: new ObjectId(value._id),
        // ator_id: value.id,
        nome: value.name ? value.name : null,
        genero: value.gender,
      };

      await col.insertOne(document);

      console.log(`${index} | SUCCESS`);
    } catch (error) {
      console.log(`${index} | ERROR - `, document);
      console.error(error.message);
      throw error;
    }
  }

  console.log(`${data.length} atores inseridos!`);
};
