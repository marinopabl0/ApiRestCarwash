const express = require('express')
const cors = require('cors');
const { dbConnection } = require('./database/config');

class Server{

    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.categoriasPath = '/api/categorias';
        this.serviciosPath = '/api/servicios';
        this.tipovehiculosPath = '/api/tipovehiculos';
        this.planesPath = '/api/planes';
        this.planserviciosPath = '/api/planservicios';
        
        this.conectarDB();

        this.middlewares();

        this.routes();
    }

    //base de datos
    async conectarDB(){
        await dbConnection();
    }

    middlewares(){
        //cords
        this.app.use(cors());

        //Lectura y parseo en formato JSON
        this.app.use(express.json());

        //Directotio Publico
        this.app.use(express.static('public'));
    }


    routes(){
        this.app.use(this.categoriasPath, require('./routes/categoria'));
        this.app.use(this.serviciosPath, require('./routes/servicio'));
        this.app.use(this.tipovehiculosPath, require('./routes/tipovehiculo'));
        this.app.use(this.planesPath, require('./routes/plan'));
        this.app.use(this.planserviciosPath, require('./routes/planservicio'));
    }


    listen(){
        this.app.listen(this.port, () =>{
            console.log('Servidor corriendo en el puerto ',this.port)
        })
    }
}

module.exports = Server;