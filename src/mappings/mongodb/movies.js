const { ObjectId } = require('mongodb');
const fs = require('fs');
const movies = require('../../../data/movies.json');

exports.init = async () => {
  const data = movies;

  const json = [];
  const errors = [];

  for (const x of data) {
    try {
      x._id = new ObjectId();
      json.push(x);
    } catch (error) {
      errors.push(x);
      // console.log(error.message);
      // break;
    }
  }

  console.log('Errors: ', errors.length);
  console.log(json.length);
  fs.writeFileSync('data/mongo/movies.json', JSON.stringify(json, null, 2));
};
