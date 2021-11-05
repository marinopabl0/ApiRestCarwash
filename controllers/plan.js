const { response, request } = require('express');

const Plan = require('../models/plan');

//GET
const PlanesGet = async (req = request, res = response) => {
    try {

        const planes = await Plan.find();

        res.json({
            planes
        })
    }
    catch(error){
    }
}


//POST
const PlanesPost = async (req = request, res = response) => {
    try{

        const { descripcion, precio, categoriaid, tipovehiculoid } = req.body;
        const plan = new Plan({descripcion, precio, categoriaid, tipovehiculoid});

        await plan.save();

        res.json({
            plan
        })
    }
    catch(error){
    }
}


//PUT
const PlanesPut = async (req = request, res = response) => {
    try{

        const { id } = req.params;
        const {_id, ...resto} = req.body;

        const plan = await Plan.findByIdAndUpdate(id, resto);

        res.json(plan);
    }
    catch(error){
    }
}


//DELETE
const PlanesDelete = async (req = request, res = response) => {
    try{

        const { id } = req.params;

        const plan = await Plan.findByIdAndDelete(id);

        res.json({
            id
        })
    }
    catch(error){
    }
}

module.exports = {
    PlanesGet,
    PlanesPost,
    PlanesPut,
    PlanesDelete
}