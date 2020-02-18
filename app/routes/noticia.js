module.exports = server => {
  server.get('/noticia', (_, response) => {
    const connection = server.config.dbConnection();
    const noticiasModel = new server.app.models.NoticiasDAO(connection);

    noticiasModel.getNoticia((_, result) => {
      response.render('noticias/noticia', { noticia: result });
    });
  });
};
