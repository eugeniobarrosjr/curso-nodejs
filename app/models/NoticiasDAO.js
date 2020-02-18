function NoticiasDAO(connection) {
  this._connection = connection;
}

NoticiasDAO.prototype.getNoticias = callback => {
  this._connection.query('SELECT * FROM noticias', callback);
};

NoticiasDAO.prototype.getNoticia = callback => {
  this._connection.query(
    'SELECT * FROM noticias WHERE id_noticia = 2',
    callback
  );
};

NoticiasDAO.prototype.saveNoticia = (noticia, callback) => {
  this._connection.query('INSERT INTO noticias SET ? ', noticia, callback);
};

module.exports = () => {
  return NoticiasDAO;
};
