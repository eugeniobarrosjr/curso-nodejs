const express = require('express');
const server = express();

server.set('view engine', 'ejs');

server.get('/', (request, response) => {
    response.render('home/index');
});

server.get('/form', (request, response) => {
    response.render('admin/form_add_noticia');
});

server.get('/noticias', (request, response) => {
    response.render('noticias/noticias');
});


server.listen(3000, () => {

});
