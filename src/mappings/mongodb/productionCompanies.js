const { ObjectId } = require('mongodb');
const fs = require('fs');
const productionCompanies = require('../../../data/production_companies.json');

exports.init = async () => {
  const data = productionCompanies;

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
  fs.writeFileSync('data/mongo/production_companies.json', JSON.stringify(json, null, 2));
};
