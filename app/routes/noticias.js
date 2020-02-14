
module.exports = (server) => {

    server.get('/noticias', (request, response) => {
        const connection = server.config.dbConnection();
        connection.query('SELECT * FROM noticias', (error, result) => {
            response.render('noticias/noticias', {noticias: result});
        });
    });
};


