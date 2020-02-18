module.exports = () => {
  this.getNoticias = (connection, callback) => {
    connection.query('SELECT * FROM noticias', callback);
  };

  this.getNoticia = (connection, callback) => {
    connection.query('SELECT * FROM noticias WHERE id_noticia = 2', callback);
  };

  this.saveNoticia = (noticia, connection, callback) => {
    connection.query('INSERT INTO noticias SET ? ', noticia, callback);
  };

  return this;
};
