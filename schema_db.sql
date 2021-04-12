-- -----------------------------------------------------
-- Table filmes
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS filmes (
  id BIGINT NOT NULL,
  titulo TEXT NOT NULL,
  orcamento BIGINT,
  homepage TEXT,
  idioma_original VARCHAR(45),
  descricao TEXT,
  popularidade DECIMAL (10,6),
  data_lancamento DATE,
  receita BIGINT,
  duracao DECIMAL (10,2),
  status VARCHAR(45),
  slogan TEXT,
  media_avaliacoes DECIMAL (10,2),
  total_avaliacoes INT,
  PRIMARY KEY (id)
  );

-- -----------------------------------------------------
-- Table generos
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS generos (
  id BIGINT NOT NULL,
  nome VARCHAR(100) NOT NULL,
  PRIMARY KEY (id)
  );

-- -----------------------------------------------------
-- Table generos_filmes
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS generos_filmes (
    generos_id BIGINT NOT NULL,
    filmes_id BIGINT NOT NULL,
    FOREIGN KEY (generos_id) REFERENCES generos (id),
    FOREIGN KEY (filmes_id) REFERENCES filmes (id),
    PRIMARY KEY (generos_id, filmes_id)
  );

-- -----------------------------------------------------
-- Table atores
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS atores (
  id BIGINT NOT NULL,
  nome VARCHAR(100) NOT NULL,
  genero INT NOT NULL,
  PRIMARY KEY (id)
  );

-- -----------------------------------------------------
-- Table elencos
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS elencos (
    atores_id BIGINT NOT NULL,
    filmes_id BIGINT NOT NULL,
    FOREIGN KEY (atores_id) REFERENCES atores (id),
    FOREIGN KEY (filmes_id) REFERENCES filmes (id),
    PRIMARY KEY (atores_id, filmes_id)
  );

-- -----------------------------------------------------
-- Table keywords
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS keywords (
  id BIGINT NOT NULL,
  nome VARCHAR(100) NOT NULL,
  PRIMARY KEY (id)
  );

-- -----------------------------------------------------
-- Table keywords_filmes
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS keywords_filmes (
    keywords_id BIGINT NOT NULL,
    filmes_id BIGINT NOT NULL,
    FOREIGN KEY (keywords_id) REFERENCES keywords (id),
    FOREIGN KEY (filmes_id) REFERENCES filmes (id),
    PRIMARY KEY (keywords_id, filmes_id)
  );

-- -----------------------------------------------------
-- Table avaliacoes
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS avaliacoes (
  id BIGINT NOT NULL,
  nota DECIMAL (10,2) NOT NULL,
  filmes_id BIGINT NOT NULL,
  FOREIGN KEY (filmes_id) REFERENCES filmes (id),
  PRIMARY KEY (id)
  );

-- -----------------------------------------------------
-- Table paises
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS paises (
  id BIGINT NOT NULL,
  nome VARCHAR(80) NOT NULL,
  sigla VARCHAR(45) NOT NULL,
  PRIMARY KEY (id)
  );

-- -----------------------------------------------------
-- Table paises_filmes
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS paises_filmes (
    paises_id BIGINT NOT NULL,
    filmes_id BIGINT NOT NULL,
    FOREIGN KEY (paises_id) REFERENCES paises (id),
    FOREIGN KEY (filmes_id) REFERENCES filmes (id),
    PRIMARY KEY (paises_id, filmes_id)
  );

-- -----------------------------------------------------
-- Table produtoras
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS produtoras (
  id BIGINT NOT NULL,
  nome VARCHAR(200) NOT NULL,
  -- paises_id BIGINT NOT NULL,
  -- FOREIGN KEY (paises_id) REFERENCES paises (id),
  PRIMARY KEY (id)
  );

-- -----------------------------------------------------
-- Table produtoras_filmes
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS produtoras_filmes (
    produtoras_id BIGINT NOT NULL,
    filmes_id BIGINT NOT NULL,
    FOREIGN KEY (produtoras_id) REFERENCES produtoras (id),
    FOREIGN KEY (filmes_id) REFERENCES filmes (id),
    PRIMARY KEY (produtoras_id, filmes_id)
  );

-- -----------------------------------------------------
-- Table idiomas
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS idiomas (
  id BIGINT NOT NULL,
  nome VARCHAR(80) NOT NULL,
  sigla VARCHAR(45) NOT NULL,
  PRIMARY KEY (id)
  );

-- -----------------------------------------------------
-- Table filmes_idiomas
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS filmes_idiomas (
    idiomas_id BIGINT NOT NULL,
    filmes_id BIGINT NOT NULL,
    FOREIGN KEY (idiomas_id) REFERENCES idiomas (id),
    FOREIGN KEY (filmes_id) REFERENCES filmes (id),
    PRIMARY KEY (idiomas_id, filmes_id)
  );
