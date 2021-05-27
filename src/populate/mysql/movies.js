const db = require('../../../utils/persistence/mysql');
const movies = require('../../../data/movies.json');

exports.populate = async () => {
  console.log('Inserindo filmes...');

  const data = movies;
  let sql = '';

  for (const [index, value] of data.entries()) {
    try {
      sql = `INSERT INTO filmes VALUES (
        ${value.id},
        ${
          value.title || value.original_title
            ? `"${value.title || value.original_title}"`
            : ''
        },
        ${value.budget},
        ${value.homepage ? `"${value.homepage}"` : null},
        ${value.original_language ? `"${value.original_language}"` : null},
        ${value.overview ? `"${value.overview}"` : null},
        ${value.popularity},
        ${value.release_date ? `"${value.release_date}"` : null},
        ${value.revenue},
        ${value.runtime},
        ${value.status ? `"${value.status}"` : null},
        ${value.tagline ? `"${value.tagline}"` : null},
        ${value.vote_average},
        ${value.vote_count}
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

  console.log(`${data.length} filmes inseridos!`);
};
