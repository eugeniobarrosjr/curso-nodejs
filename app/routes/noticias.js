module.exports = server => {
  server.get('/noticias', (_, response) => {
    const connection = server.config.dbConnection();
    const noticiasModel = server.app.models.noticiasModel;

    noticiasModel.getNoticias(connection, (_, result) => {
      response.render('noticias/noticias', { noticias: result });
    });
  });
};
