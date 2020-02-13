module.exports = (server) => {
    server.get('/noticias', (request, response) => {
        response.render('noticias/noticias');
    });
};


