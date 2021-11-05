const { response, request } = require('express');

const PlanServicio = require('../models/planservicio');

//GET
const PlanServiciosGet = async (req = request, res = response) => {
    try {

        const planservicios = await PlanServicio.find();

        res.json({
            planservicios
        })
    }
    catch(error){
    }
}


//POST
const PlanServiciosPost = async (req = request, res = response) => {
    try{

        const { planid, servicioid } = req.body;
        const planservicio = new PlanServicio({planid, servicioid});

        await planservicio.save();

        res.json({
            planservicio
        })
    }
    catch(error){
    }
}


//PUT
/*const PlanServicioPut = async (req = request, res = response) => {
    try{

        const { id } = req.params;
        const {_id, ...resto} = req.body;

        const planservicio = await PlanServicio.findByIdAndUpdate(id, resto);

        res.json(planservicio);
    }
    catch(error){
    }
}*/


//DELETE
const PlanServiciosDelete = async (req = request, res = response) => {
    try{

        const { id } = req.params;

        const planservicios = await PlanServicio.findByIdAndDelete(id);

        res.json({
            id
        })
    }
    catch(error){
    }
}

module.exports = {
    PlanServiciosGet,
    PlanServiciosPost,
    PlanServiciosDelete
}