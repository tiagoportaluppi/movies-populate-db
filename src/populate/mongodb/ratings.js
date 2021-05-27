const { ObjectId } = require('mongodb');
const mongo = require('../../../utils/persistence/mongodb');
const ratings = require('../../../data/ratings.json');
const movies = require('../../../data/mongo/movies.json');

exports.populate = async () => {
  const db = await mongo.getConnection();
  const col = await db.collection('avaliacoes');

  console.log('Inserindo avaliações...');

  const data = ratings;
  let document = null;

  for (const [index, value] of data.entries()) {
    try {
      document = {
        nota: value.rating || 0,
        filme_id: null,
      };

      const { _id } = movies.find((item) => item.id === value.movieId) || {};

      document.filme_id = new ObjectId(_id);

      await col.insertOne(document);
      console.log(`${index} | SUCCESS`);
    } catch (error) {
      console.log(`${index} | ERROR - `, document);
      console.error(error.message);
      throw error;
    }
  }

  console.log(`${data.length} avaliações inseridas!`);
};
