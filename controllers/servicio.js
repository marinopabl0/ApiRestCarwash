const { response, request } = require('express');

const Servicio = require('../models/servicio');

//GET
const ServiciosGet = async (req = request, res = response) => {
    try {

        const servicios = await Servicio.find();

        res.json({
            servicios
        })
    }
    catch(error){
    }
}


//POST
const ServiciosPost = async (req = request, res = response) => {
    try{

        const { descripcion } = req.body;
        const servicio = new Servicio({descripcion});

        await servicio.save();

        res.json({
            servicio
        })
    }
    catch(error){
    }
}


//PUT
const ServiciosPut = async (req = request, res = response) => {
    try{

        const { id } = req.params;
        const {_id, ...resto} = req.body;

        const servicio = await Servicio.findByIdAndUpdate(id, resto);

        res.json(servicio);
    }
    catch(error){
    }
}


//DELETE
const ServiciosDelete = async (req = request, res = response) => {
    try{

        const { id } = req.params;

        const servicio = await Servicio.findByIdAndDelete(id);

        res.json({
            id
        })
    }
    catch(error){
    }
}

module.exports = {
    ServiciosGet,
    ServiciosPost,
    ServiciosPut,
    ServiciosDelete
}