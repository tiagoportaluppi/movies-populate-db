const mysql = require('mysql');

var con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'test',
});

exports.connect = async () => {
  return new Promise((resolve, reject) => {
    con.connect(function (err) {
      if (err) return reject(err);
      console.log('Connected!');
      return resolve(con);
    });
  });
};

exports.query = async (sql) => {
  return new Promise((resolve, reject) => {
    con.query(sql, function (err, result) {
      if (err) return reject(err);
      return resolve(result);
    });
  });
};
