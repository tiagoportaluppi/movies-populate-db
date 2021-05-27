const { ObjectId } = require('mongodb');
const mongo = require('../../../utils/persistence/mongodb');
const genres = require('../../../data/genres.json');
const keywords = require('../../../data/keywords.json');
const countries = require('../../../data/countries.json');
const languages = require('../../../data/languages.json');
const productionCompanies = require('../../../data/mongo/production_companies.json');
const cast = require('../../../data/mongo/cast.json');
const movies = require('../../../data/mongo/movies.json');

exports.populate = async () => {
  const db = await mongo.getConnection();
  const col = await db.collection('filmes');

  console.log('Inserindo filmes...');

  const data = movies;
  let document = null;

  for (const [index, value] of data.entries()) {
    try {
      document = {
        _id: new ObjectId(value._id),
        // filme_id: value.id,
        titulo: value.title || value.original_title,
        orcamento: value.budget,
        homepage: value.homepage ? value.homepage : null,
        idioma_original: value.original_language ? value.original_language : null,
        descricao: value.overview ? value.overview : null,
        popularidade: value.popularity,
        data_lancamento: value.release_date ? value.release_date : null,
        receita: value.revenue,
        duracao: value.runtime,
        status: value.status ? value.status : null,
        slogan: value.tagline ? value.tagline : null,
        media_avaliacoes: value.vote_average,
        total_avaliacoes: value.vote_count,
      };

      document.generos = genres
        .filter(({ movieIds }) => movieIds.includes(value.id))
        .map((item) => item.name);

      document.keywords = keywords
        .filter(({ movieIds }) => movieIds.includes(value.id))
        .map((item) => item.name);

      document.paises = countries
        .filter(({ movieIds }) => movieIds.includes(value.id))
        .map((item) => ({ nome: item.name, sigla: item.iso_3166_1 }));

      document.idiomas = languages
        .filter(({ movieIds }) => movieIds.includes(value.id))
        .map((item) => ({ nome: item.name, sigla: item.iso_639_1 }));

      document.produtoras = productionCompanies
        .filter(({ movieIds }) => movieIds.includes(value.id))
        .map((item) => new ObjectId(item._id));

      document.elenco = cast
        .filter(({ movieIds }) => movieIds.includes(value.id))
        .map((item) => new ObjectId(item._id));

      await col.insertOne(document);
      console.log(`${index} | SUCCESS`);
    } catch (error) {
      console.log(`${index} | ERROR - `, document);
      console.error(error.message);
      throw error;
    }
  }

  console.log(`${data.length} filmes inseridos!`);
};
