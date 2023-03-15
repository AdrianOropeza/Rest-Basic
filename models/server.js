//express
const express = require('express');
const cors = require('cors');

class Server {
    constructor() {
        this.app = express();
        this.port = 3000;

        this.middlewares();

        this.routes();
    }

    //Middlewares
    middlewares () {
        //CORS
        this.app.use(cors())

        //Directorio publico
        this.app.use( express.static('public') );

        //Lectura y parseo del body
        this.app.use( express.json() );
    }


    //Rutas App
    routes() {
        this.app.use('/api/usuarios', require('../routes/usuarios'));
    }

    listen() {
        this.app.listen(this.port);
    }
}

module.exports = Server;