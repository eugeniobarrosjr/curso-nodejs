module.exports = server => {
  server.get('/admin', (_, response) => {
    response.render('admin/form_add_noticia');
  });

  server.post('/noticias/salvar', (request, response) => {
    const noticia = request.body;

    const connection = server.config.dbConnection();
    const noticiasModel = new server.app.models.NoticiasDAO(connection);

    noticiasModel.saveNoticia(noticia, (_, __) => {
      response.redirect('/noticias');
    });
  });
};
