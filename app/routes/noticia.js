module.exports = (server) => {

    server.get('/noticia', (request, response) => {
        const connection = server.config.dbConnection();
        connection.query('SELECT * FROM noticias WHERE id_noticia = 2', (error, result) => {
            response.render('noticias/noticia', {noticia: result});
        });
    });
};


