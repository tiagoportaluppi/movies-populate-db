const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017/admin';
const db = 'filmes';

exports.getConnection = async () => {
  var options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };
  return MongoClient.connect(url, options).then((res) => {
    console.log('MongoDB conectado!');
    return res.db(db);
  });
};
