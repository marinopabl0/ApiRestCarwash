const { response, request } = require('express');

const TipoVehiculo = require('../models/tipovehiculo');

//GET
const TipoVehiculosGet = async (req = request, res = response) => {
    try {

        const tipovehiculos = await TipoVehiculo.find();

        res.json({
            tipovehiculos
        })
    }
    catch(error){
    }
}


//POST
const TipoVehiculosPost = async (req = request, res = response) => {
    try{

        const { descripcion } = req.body;
        const tipovehiculo = new TipoVehiculo({descripcion});

        await tipovehiculo.save();

        res.json({
            tipovehiculo 
        })
    }
    catch(error){
    }
}


//PUT
const TipoVehiculosPut = async (req = request, res = response) => {
    try{

        const { id } = req.params;
        const {_id, ...resto} = req.body;

        const tipovehiculo = await TipoVehiculo.findByIdAndUpdate(id, resto);

        res.json(tipovehiculo);
    }
    catch(error){
    }
}


//DELETE
const TipoVehiculosDelete = async (req = request, res = response) => {
    try{

        const { id } = req.params;

        const tipovehiculo = await TipoVehiculo.findByIdAndDelete(id);

        res.json({
            id
        })
    }
    catch(error){
    }
}

module.exports = {
    TipoVehiculosGet,
    TipoVehiculosPost,
    TipoVehiculosPut,
    TipoVehiculosDelete
}