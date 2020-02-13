const server = require('./config/server');

const rotaNoticias = require('./app/routes/noticias')(server);
const rotaHome = require('./app/routes/home')(server);
const rotaForm = require('./app/routes/form')(server);


server.listen(3000, () => {
    console.log('Servidor Online');
});
