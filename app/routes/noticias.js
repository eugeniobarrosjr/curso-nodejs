module.exports = server => {
  server.get('/noticias', (_, response) => {
    const connection = server.config.dbConnection();
    const noticiasModel = new server.app.models.NoticiasDAO(connection);

    noticiasModel.getNoticias((_, result) => {
      response.render('noticias/noticias', { noticias: result });
    });
  });
};
