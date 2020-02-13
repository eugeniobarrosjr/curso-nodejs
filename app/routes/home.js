module.exports = (server) => {
    server.get('/', (request, response) => {
        response.render('home/index');
    });
};

