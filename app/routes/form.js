module.exports = (server) => {
    server.get('/form', (request, response) => {
        response.render('admin/form_add_noticia');
    });
};


