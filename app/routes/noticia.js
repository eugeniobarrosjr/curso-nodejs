module.exports = server => {
  server.get('/noticia', (_, response) => {
    const connection = server.config.dbConnection();
    const noticiasModel = server.app.models.noticiasModel;

    noticiasModel.getNoticia(connection, (_, result) => {
      response.render('noticias/noticia', { noticia: result });
    });
  });
};
